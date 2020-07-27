import { Component, OnInit } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    ) {}

  ngOnInit(): void {}

  openDialog(type: string){
      if (type === 'signIn'){
        const dialogRef = this.dialog.open(SigninComponent, {});
      } else {
        const dialogRef = this.dialog.open(SignupComponent, {});
      }
  }
}
