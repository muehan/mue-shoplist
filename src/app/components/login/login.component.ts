import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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
    console.log(storedMail);
    if (storedMail || storedMail !== undefined) {
      this.mailFormControl.setValue(storedMail);
    }
  }

  ngOnInit() {
    if (this.authService.authenticated) {
      this.router.navigate(['list']);
    }
  }

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
