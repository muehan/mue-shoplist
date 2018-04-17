import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ListService } from './services';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private listService: ListService) { }

  ngOnInit(): void { }

  removeChecked() {
    this.listService.RemoveCheckedItems();
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    this.listService.Update(item);
  }
}
