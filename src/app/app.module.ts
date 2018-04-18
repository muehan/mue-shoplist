import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MueAddItemDialogComponent } from './dialogs';
import { AppComponent } from './app.component';
import { MueLoginComponent } from './components';
import { MueListComponent } from './components';
import { MueToolbarComponent } from './components';

import { ListService } from './services';
import { AuthService } from './services';
import { AuthGuardService } from './services';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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

import { appRoutes } from './app.routes';

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
    MueLoginComponent,
    MueListComponent,
    MueToolbarComponent
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
    RouterModule.forRoot(appRoutes),
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
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    ListService,
    AuthService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
