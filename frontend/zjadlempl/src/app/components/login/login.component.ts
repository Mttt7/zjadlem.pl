import { Component, computed, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { LoginPayload } from 'src/app/models/loginPayload';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = signal('');
  password = signal('');

  loginPayload: Signal<LoginPayload> = computed(() => {
    return { email: this.email(), password: this.password() };
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public async login() {
    if (!this.validateLoginPayload()) return;

    this.authService.login(this.loginPayload()).subscribe({
      next: () => {
        toast.success('Logged in!');
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error(error);
        toast.error(error.error);
      },
    });
  }

  private validateLoginPayload(): boolean {
    if (this.email() === '') {
      toast.error('Email is required!');
      return false;
    }
    if (
      this.email().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) ===
      null
    ) {
      toast.error('Email is not valid!');
      return false;
    }

    return true;
  }
}
