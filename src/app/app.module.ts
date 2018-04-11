import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import {
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

import { MatInputModule } from '@angular/material/input';

const firebaseConfig = {
  apiKey: 'AIzaSyDYm_INLLwSPRQmZ2jEsDdSLRX6o2vNU1g',
  authDomain: 'mue-shoplist.firebaseapp.com',
  databaseURL: 'https://mue-shoplist.firebaseio.com',
  projectId: 'mue-shoplist',
  storageBucket: 'mue-shoplist.appspot.com',
  messagingSenderId: '689727068064'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
