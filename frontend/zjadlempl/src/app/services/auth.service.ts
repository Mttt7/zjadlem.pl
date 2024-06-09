import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from '../models/loginPayload';
import { toast } from 'ngx-sonner';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = process.env['NG_SERVER_URL'];

  private user = new BehaviorSubject<any>(null);
  public user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  public login(loginPayload: LoginPayload) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return this.http.post(`${this.BASE_URL}/auth/login`, loginPayload).pipe(
      tap((res: any) => {
        console.log(res);
        sessionStorage.setItem('token', res.accessToken);
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.user.next(res.user);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error(error.error.error));
      })
    );
  }

  public validateToken() {
    //DODAC NA BACKENDZIE WALIDACJE TOKENA SPRAWDZIC CZY AKTUALNY ITD PPRAWNY
  }

  public logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.user.next(null);
  }

  checkIfUserIsLoggedIn() {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      this.validateToken();
      this.user.next(JSON.parse(sessionStorage.getItem('user') || 'null'));
    }
  }

  public getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem('user') || 'null');
  }
}
