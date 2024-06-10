import { Component, signal } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public userLoggedIn = signal(false);
  public username = signal('');

  public loading = signal(false);

  ngOnInit(): void {
    this.loading.set(true);
    this.initSubscriptions();
    this.loginCheck();
  }

  initSubscriptions() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.userLoggedIn.set(true);
        this.username.set(user.username);
      } else {
        this.userLoggedIn.set(false);
        this.username.set('');
      }
    });
  }

  loginCheck() {
    this.authService.checkIfCredentailsInStorage().subscribe((res) => {
      if (res === true) {
        this.authService.validateToken().subscribe((res2) => {
          if ((res2 as any).valid === true) {
            this.userLoggedIn.set(true);
          } else {
            this.userLoggedIn.set(false);
            this.router.navigate(['/login']);
          }
          this.loading.set(false);
        });
      } else {
        this.userLoggedIn.set(false);
        this.loading.set(false);
      }
    });
  }
}
