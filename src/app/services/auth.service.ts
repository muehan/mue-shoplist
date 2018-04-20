import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  private authState: firebase.User = null;
  private isLoading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);

  constructor(
    private firebaseAuth: AngularFireAuth,
  ) {
    this.firebaseAuth.authState.subscribe(user => {
      console.log('userstate changed: ' + user);
      this.authState = user;
      this.isLoading$.next(false);
    });

    this.isLoading$.subscribe(x => console.log(x));
  }

  public get loading$(): Observable<Boolean> {
    return this.isLoading$.asObservable();
  }

  public get authenticated(): boolean {
    return this.authState !== null;
  }

  public emailLogin(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('loggin in: ' + user);
        // no longer needed when authState subscription is running
        // this.authState = user;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  public logout() {
    console.log('LOGOUT');
    this.isLoading$.next(true);
    this.firebaseAuth.auth.signOut();
  }
}
