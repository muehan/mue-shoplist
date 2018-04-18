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

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() { }

  login() {
    this.authService.emailLogin(this.mail, this.password);
    this.router.navigate(['list']);
  }
}
