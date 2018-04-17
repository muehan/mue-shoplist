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

  public GetAll(): Observable<ShoppingItem[]> {
    return this.items$;
  }

  public Add(newItem: Partial<ShoppingItem>): any {
    this.firebase.list('items').push(newItem);
  }

  public Update(item: ShoppingItem) {
    let key = item.$key;
    delete item.$key;
    this.firebase.list('items').update(key, item);
  }

  public RemoveCheckedItems() {
    this.itemArray.filter(x => x.checked).forEach(item => this.firebase.list('items').remove(item.$key));
  }
}
