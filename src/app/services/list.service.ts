import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingItem } from '../models';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AuthService } from './auth.service';
import { filter } from 'rxjs/operators/filter';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class ListService {

  private items$: Observable<ShoppingItem[]>;
  private itemArray: Array<ShoppingItem>;
  private initialized: Boolean = false;

  constructor(
    private firebase: AngularFireDatabase,
    private authService: AuthService,
  ) {
    console.log('list service constructor is called');
  }

  public getAll(): Observable<ShoppingItem[]> {

    if (!this.initialized) {
      this.initialize();
    }

    return this.items$.map(x => x.sort((a, b) => {
      return a.orderPosition < b.orderPosition ? -1 : 1;
    }));
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
    if (highestNumber >= 0 ||
      highestNumber === Number.NEGATIVE_INFINITY ||
      highestNumber === Number.POSITIVE_INFINITY) {
      return 1;
    }
    return highestNumber + 1;
  }

  private initialize() {
    if (!this.initialized) {
      this.authService.loading$.pipe(
        filter((status) => {
          console.log('initialize is loading:' + status);
         return  status === false;
        }),
        switchMap(() => Observable.of(this.authService.authenticated)),
        filter((login) => login === true),
        tap((_) => {
          console.log('tap list.service');
          this.items$ = this.firebase.list<ShoppingItem>('items').snapshotChanges().map(changes => {
            return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
          });
          this.items$.subscribe(x => this.itemArray = x);
          this.initialized = true;
        }));
    }
  }
}
