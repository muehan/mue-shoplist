import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from '../models';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class ListService {

  private items$: Observable<ShoppingItem[]>;
  private itemArray: Array<ShoppingItem>;

  constructor(
    private firebase: AngularFireDatabase,
  ) {
    this.items$ = this.firebase.list<ShoppingItem>('items').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });

    this.items$.subscribe(x => this.itemArray = x);
  }

  public getAll(): Observable<ShoppingItem[]> {
    return this.items$.map(x => x.sort((a, b) => {
      return a.orderPosition < b.orderPosition ? -1 : 1;
    }
    ));
  }

  public add(newItem: Partial<ShoppingItem>): any {
    newItem.orderPosition = this.getnextOrderPosition();
    this.firebase.list('items').push(newItem);
  }

  public update(item: ShoppingItem) {
    let key = item.$key;
    delete item.$key;
    this.firebase.list('items').update(key, item);
  }

  public removeCheckedItems() {
    this.itemArray.filter(x => x.checked).forEach(item => this.firebase.list('items').remove(item.$key));
  }

  private getnextOrderPosition(): number {
    let highestNumber = Math.max(...this.itemArray.map(x => x.orderPosition));
    console.log(highestNumber);
    if (highestNumber >= 0 ||
        highestNumber === Number.NEGATIVE_INFINITY ||
        highestNumber === Number.POSITIVE_INFINITY) {
      return 1;
    }
    return highestNumber + 1;
  }
}
