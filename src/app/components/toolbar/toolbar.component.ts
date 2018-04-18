import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services';

@Component({
  selector: 'mue-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  constructor(
    private listService: ListService
  ) { }

  removeChecked() {
    this.listService.RemoveCheckedItems();
  }
}
