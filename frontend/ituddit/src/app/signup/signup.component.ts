import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password1: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get userName() {
    return this.profileForm.get('userName') as FormControl;
  }
  get password1() {
    return this.profileForm.get('password1') as FormControl;
  }
  get password2() {
    return this.profileForm.get('password2') as FormControl;
  }

  constructor(
    private dialogRef: MatDialogRef<SignupComponent>,
    private userService: UserService) { }

  registerNewUser() {
    console.log(this.profileForm.value);
    this.userService.registerUser(this.profileForm.value).subscribe(
      (response) => {
        console.log('register success!');
        this.closeDialog();
      },
      (error) => {
        console.log(JSON.stringify(error.error));
        this.closeDialog();
      }
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
