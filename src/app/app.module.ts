import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

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
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
