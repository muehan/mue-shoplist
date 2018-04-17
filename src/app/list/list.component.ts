import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MueAddItemDialogComponent } from '../dialog';
import { ListService } from '../services';
import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from '../models';

@Component({
  selector: 'mue-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MueListComponent implements OnInit {

  public items$: Observable<ShoppingItem[]>;

  constructor(
    public dialog: MatDialog,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.items$ = this.listService.GetAll();
  }

  AddNewItem() {
    let dialogRef = this.dialog.open(MueAddItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listService.Add({ value: result, checked: false });
    });
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    this.listService.Update(item);
  }
}
