import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'mue-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class MueProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() { }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
