import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  profileForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
  });

  get email() {
    return this.profileForm.get('email') as FormControl;
  }

  get password() {
    return this.profileForm.get('password') as FormControl;
  }

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<SigninComponent>) { }

  userLogIn() {
    const email = this.profileForm.get('email');
    const password = this.profileForm.get('password');
    this.userService.userLoginService(email).subscribe(
      (response) => {
        console.log(response, password);
        this.closeDialog();
      },
      (error) => {
        console.log( 'error: ', JSON.stringify(error));
        this.closeDialog();
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
