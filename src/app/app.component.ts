import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Observable<{}[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.items = this.firebase.list('items').valueChanges();
  }
}
