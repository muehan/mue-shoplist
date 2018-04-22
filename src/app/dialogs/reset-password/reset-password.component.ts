import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class MueResetPasswordDialogComponent implements OnInit {

  public newPassword: string;
  public newPasswordCheck: string;
  public oldPassword: string;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<MueResetPasswordDialogComponent>
  ) { }

  ngOnInit() {
  }

  public submit() {
    if (this.newPassword) {
      this.authService
        // .resetPassword(this.newPassword, this.oldPassword)
        // .then((_) => this.dialogRef.close())
        // .catch(error => this.errorMessage = error);
    } else {
      this.errorMessage = "no password defined";
    }
  }

}
