import { MueListComponent } from './components';
import { MueLoginComponent } from './components';
import { AuthGuardService } from './services';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'list', component: MueListComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: MueLoginComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];
