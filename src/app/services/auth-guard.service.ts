import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { filter } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.loading$.pipe(
      filter((status) => status === false),
      switchMap(() => Observable.of(this.authService.authenticated)),
      tap((auth) => {
        console.log('auth in tab ' + auth);
        if (!auth) {
          this.router.navigate(['/login']);
        }
      }),
    );
  }
}
