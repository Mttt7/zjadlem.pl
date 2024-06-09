import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token'); // ZMIENIC w produkcji

    if (token) {
      const clonedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
