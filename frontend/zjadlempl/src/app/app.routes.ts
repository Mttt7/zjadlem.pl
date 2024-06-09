import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewReviewComponent } from './components/add-new-review/add-new-review.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-new-review', component: AddNewReviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
