import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MueAddItemDialogComponent } from '../dialog';
import { ListService } from '../services';

@Component({
  selector: 'mue-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MueListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private listService: ListService
  ) { }

  ngOnInit() {
  }

  AddNewItem() {
    let dialogRef = this.dialog.open(MueAddItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.listService.Add({ value: result, checked: false });
    });
  }
}
