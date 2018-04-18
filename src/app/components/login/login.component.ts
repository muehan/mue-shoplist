import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'mue-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    'login.component.scss'
  ]
})

export class MueLoginComponent implements OnInit {

  public mail: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.authService.authenticated) {
      this.router.navigate(['list']);
    }

    let storedMail = localStorage.getItem('mail');
    if (storedMail) {
      this.mail = storedMail;
    }
  }

  login() {
    localStorage.setItem('mail', this.mail);
    this.authService.emailLogin(this.mail, this.password)
      .then((_) => {
        this.router.navigate(['list']);
      })
      .catch((error) => {
        this.errorMessage = error;
      });

  }
}
