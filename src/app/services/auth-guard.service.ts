import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
