import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authState: any = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebase: AngularFireDatabase,
    private router: Router,
  ) {
    this.firebaseAuth.authState.subscribe(user => {
      this.authState = user;
      if (this.authState) {
        this.router.navigate(['list']);
      }
    });
  }

  public get authenticated(): boolean {
    return this.authState !== null;
  }

  public emailLogin(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
