import { Component, OnInit } from '@angular/core';
import { ListService, AuthService } from '../../services';

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

  removeChecked() {
    this.listService.removeCheckedItems();
  }

  get isAuthenticated(): boolean {
    return this.authService.authenticated;
  }
}
