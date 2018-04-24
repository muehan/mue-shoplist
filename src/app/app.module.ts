import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MueAddItemDialogComponent } from './dialogs';
import { MueResetPasswordDialogComponent } from './dialogs';
import { AppComponent } from './app.component';
import { MueLoginComponent } from './components';
import { MueListComponent } from './components';
import { MueToolbarComponent } from './components';
import { MueProfileComponent } from './components';
import { MueFreezerComponent } from './components';

import { AuthService } from './services';
import { AuthGuardService } from './services';
import { FreezerService } from './services';
import { ListService } from './services';

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
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MueAddItemDialogComponent,
    MueLoginComponent,
    MueListComponent,
    MueToolbarComponent,
    MueProfileComponent,
    MueResetPasswordDialogComponent,
    MueFreezerComponent,
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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
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
    MueResetPasswordDialogComponent,
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    ListService,
    AuthService,
    AuthGuardService,
    FreezerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
