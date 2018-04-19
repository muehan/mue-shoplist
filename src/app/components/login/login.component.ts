import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mue-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    'login.component.scss'
  ]
})

export class MueLoginComponent implements OnInit {

  public password: string;
  public errorMessage: string;

  public mailFormControl: FormControl = new FormControl();

  constructor(
    private authService: AuthService,
    public router: Router
  ) {
    let storedMail = localStorage.getItem('mail');

    if (storedMail || storedMail !== undefined) {
      this.mailFormControl.setValue(storedMail);
    }

    this.authService.loading$.subscribe((value) => {
      if (!value) {
        if (this.authService.authenticated) {
          this.router.navigate(['list']);
        }
      }
    });
  }

  ngOnInit() { }

  login() {
    localStorage.setItem('mail', this.mailFormControl.value);
    this.authService.emailLogin(this.mailFormControl.value, this.password)
      .then((_) => {
        this.router.navigate(['list']);
      })
      .catch((error) => {
        this.errorMessage = error;
      });
  }
}
