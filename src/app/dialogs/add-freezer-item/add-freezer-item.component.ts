import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mue-add-freezer-item',
  templateUrl: './add-freezer-item.component.html',
  styleUrls: ['./add-freezer-item.component.scss']
})

export class AddFreezerItemDialogComponent implements OnInit {

  private name: string;
  private amount: string;

  constructor(
    public dialogRef: MatDialogRef<AddFreezerItemDialogComponent>
  ) { }

  ngOnInit() {
  }

  public close() {
    this.dialogRef.close({ name: this.name, amount: this.amount });
  }
}
