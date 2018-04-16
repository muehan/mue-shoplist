import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {

  public items$: Observable<ShopingItem[]>;
  public item$: Observable<ShopingItem>;
  public itemArray: Array<ShopingItem>;

  constructor(
    private firebase: AngularFireDatabase,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.items$ = this.firebase.list<ShopingItem>('items').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });

    this.items$.subscribe(x => this.itemArray = x);
  }

  AddNewItem() {
    let dialogRef = this.dialog.open(MueAddItemDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  removeChecked() {
    this.itemArray.filter(x => x.checked).forEach(item => this.firebase.list('items').remove(item.$key));
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    let key = item.$key;
    delete item.$key;
    this.firebase.list('items').update(key, item);
  }
}
