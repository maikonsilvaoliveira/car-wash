import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { ClientComponent } from './pages/client/client.component';
import { AuthGuard } from './services/auth-guard.service';
import { MenuComponent } from './pages/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "signup",component: SignUpComponent},
  { path: "client",component: ClientComponent, canActivate: [AuthGuard]},
  { path: "menu", component: MenuComponent,
      children: [
      { path: "dashboard", component: DashboardComponent }] // Dashboard carregado dentro do Menu
  }
];
