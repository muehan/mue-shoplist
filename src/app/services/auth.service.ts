import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {

  private authState: any = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebase: AngularFireDatabase,
  ) { }

  public get authenticated(): boolean {
    return this.authState !== null;
  }

  public emailLogin(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      })
      .catch(error => console.log(error));
  }
}
