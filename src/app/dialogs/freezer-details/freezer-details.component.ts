import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'mue-freezer-details',
  templateUrl: './freezer-details.component.html',
  styleUrls: ['./freezer-details.component.scss']
})
export class MueFreezerItemDetailsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MueFreezerItemDetailsDialogComponent>,    
  ) { }

  ngOnInit() {
  }

  public close(){
    this.dialogRef.close();
  }
}
