import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ShopingItem } from './shoping-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public items$: Observable<ShopingItem[]>;
  public item$: Observable<ShopingItem>;
  public newItem: string;

  constructor(private firebase: AngularFireDatabase) {
    // this.items$ = this.firebase.list<ShopingItem>('items').valueChanges();

    this.items$ = this.firebase.list<ShopingItem>('items').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });
  }

  AddNewItem() {
    this.firebase.list('items').push({ value: this.newItem, checked: false });
    this.newItem = '';
  }

  selectedItem(item) {
    item.checked === true ? item.checked = false : item.checked = true;
    let key = item.$key;
    delete item.$key;
    this.firebase.list('items').update(key, item);
  }
}
