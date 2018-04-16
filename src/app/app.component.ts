import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ShopingItem } from './shoping-item';
import { MueAddItemDialogComponent } from './dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public items$: Observable<ShopingItem[]>;
  public item$: Observable<ShopingItem>;

  constructor(
    private firebase: AngularFireDatabase,
    public dialog: MatDialog) {
    // this.items$ = this.firebase.list<ShopingItem>('items').valueChanges();

    this.items$ = this.firebase.list<ShopingItem>('items').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });
  }

  AddNewItem() {
      let dialogRef = this.dialog.open(MueAddItemDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
      });
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    let key = item.$key;
    delete item.$key;
    this.firebase.list('items').update(key, item);
  }
}
