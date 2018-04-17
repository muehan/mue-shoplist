import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'mue-add-item-dialog',
    templateUrl: 'add-item-dialog.component.html',
    styleUrls: [ 'add-item-dialog.component.scss' ]
})

export class MueAddItemDialogComponent implements OnInit {

    public newItem: string;

    constructor(
        public dialogRef: MatDialogRef<MueAddItemDialogComponent>
    ) { }

    ngOnInit() { }

    public close() {
      this.dialogRef.close();
    }
}
