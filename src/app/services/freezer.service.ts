import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FreezerItem } from '../models';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { AuthService } from './auth.service';
import { filter } from 'rxjs/operators/filter';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class FreezerService {

  private items$: Observable<FreezerItem[]>;
  private itemArray: Array<FreezerItem>;
  private initialized: Boolean = false;
  private itemsSubscription: Subscription;

  constructor(
    private firebase: AngularFireDatabase,
    private authService: AuthService,
  ) {
    console.log('list service constructor is called');
  }

  public initialize() {
    this.items$ = this.firebase.list<FreezerItem>('freezer').snapshotChanges().map(changes => {
      return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
    });
    this.itemsSubscription = this.items$.subscribe(x => this.itemArray = x);
    this.initialized = true;
  }

  public unSubscribe() {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }

  public getAll(): Observable<FreezerItem[]> {
    return this.items$.map(x => x.sort((a, b) => {
      return a.orderPosition < b.orderPosition ? -1 : 1;
    }));
  }

  public add(newItem: Partial<FreezerItem>): any {
    newItem.orderPosition = this.getnextOrderPosition();
    this.firebase.list('freezer').push(newItem);
  }

  public update(item: FreezerItem) {
    let key = item.$key;
    delete item.$key;
    this.firebase.list('freezer').update(key, item);
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
}
