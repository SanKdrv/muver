import { Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {canActivateAuth} from "./auth/access.quard";

export const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: 'main', component: MainPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ],
    canActivate: [canActivateAuth]
  },
  {path: 'login', component: LoginPageComponent},
];
