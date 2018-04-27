import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { MueAddItemDialogComponent } from './dialogs';
import { MueResetPasswordDialogComponent } from './dialogs';
import { MueAddFreezerItemDialogComponent } from './dialogs';
import { MueEditFreezerItemDialogComponent } from './dialogs';
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
  MatCardModule,
  MatCheckboxModule,
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
    MueAddFreezerItemDialogComponent,
    MueEditFreezerItemDialogComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production || environment.test })
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
    MueAddFreezerItemDialogComponent,
    MueEditFreezerItemDialogComponent,
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
