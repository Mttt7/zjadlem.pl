import { Component, signal } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  public userLoggedIn = signal(false);
  public username = signal('');

  ngOnInit(): void {
    this.authService.checkIfUserIsLoggedIn();
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
}
