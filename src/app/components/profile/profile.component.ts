import { Component, OnInit } from '@angular/core';
import { AuthService, ListService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'mue-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class MueProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private listService: ListService,
    private router: Router,
  ) { }

  ngOnInit() { }

  public logout(): void {
    this.listService.unSubscribe();
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
