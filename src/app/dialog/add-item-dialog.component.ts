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
        public dialogRef: MatDialogRef<MueAddItemDialogComponent>,
        private firebase: AngularFireDatabase
    ) { }

    ngOnInit() { }

    AddNewItem() {

      this.firebase.list('items').push({ value: this.newItem, checked: false });
      this.newItem = '';

      this.dialogRef.close();
    }
}
