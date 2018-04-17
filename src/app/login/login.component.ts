import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mue-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    'login.component.scss'
  ]
})

export class MueLoginComponent implements OnInit {

  public mail: string;
  public pw: string;

  constructor() { }

  ngOnInit() { }

  login() {

  }
}
