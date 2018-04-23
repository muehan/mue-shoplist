import { Component, OnInit } from '@angular/core';
import { ListService, AuthService } from '../../services';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'mue-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class MueToolbarComponent {

  constructor(
    private listService: ListService,
    private authService: AuthService,
  ) { }

  public get isAuthenticated(): boolean {
    return this.authService.authenticated;
  }

  public get environment(): string {
    return environment.production ? 'Prod' : 'Dev';
  }

  public get version(): string {
    return environment.version;
  }
}
