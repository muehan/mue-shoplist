import { Component, OnInit } from '@angular/core';
import { AuthService, ListService } from '../../services';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MueResetPasswordDialogComponent } from '../../dialogs';

@Component({
  selector: 'mue-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class MueProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private listService: ListService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() { }

  public logout(): void {
    this.listService.unSubscribe();
    this.authService.logout();
    this.router.navigate(["login"]);
  }

  public changePassword(): void {
    let dialogRef = this.dialog.open(MueResetPasswordDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
