import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MueAddItemDialogComponent } from './dialog';

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

import { MatDialogModule } from '@angular/material/dialog';

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
    AppComponent,
    MueAddItemDialogComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
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
  entryComponents: [
    MueAddItemDialogComponent,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
