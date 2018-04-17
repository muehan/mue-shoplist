import { MueListComponent } from './list';
import { MueLoginComponent } from './login';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'list', component: MueListComponent },
    { path: 'login',      component: MueLoginComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: '**', redirectTo: '/list', pathMatch: 'full' },
  ]