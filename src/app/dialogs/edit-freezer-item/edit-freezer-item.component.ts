import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'mue-edit-freezer-item',
  templateUrl: './edit-freezer-item.component.html',
  styleUrls: ['./edit-freezer-item.component.scss']
})

export class MueEditFreezerItemDialogComponent implements OnInit {

  public name: string;
  public amount: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MueEditFreezerItemDialogComponent>,
  ) { }

  ngOnInit() {
    this.name = this.data.item.value;
    this.amount = this.data.item.amount;
  }

  public close() {
    this.dialogRef
    .close(
      { name: this.name, amount: this.amount }
    );
  }
}
