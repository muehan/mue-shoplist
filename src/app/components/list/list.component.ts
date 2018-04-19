import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MueAddItemDialogComponent } from '../../dialogs';
import { ListService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from '../../models';

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
    this.items$ = this.listService.getAll();
  }

  AddNewItem() {
    let dialogRef = this.dialog.open(MueAddItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listService.add({ value: result, checked: false });
    });
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    this.listService.update(item);
  }
}
