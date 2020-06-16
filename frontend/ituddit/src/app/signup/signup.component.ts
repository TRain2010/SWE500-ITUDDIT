import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  register;
  returnerror;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.register = {
      username: '',
      password1: '',
      password2: '',
      email: '',
    };
  }
  registerNewUser() {
    console.log(this.register.username);
    this.userService.registerUser(this.register).subscribe(
      (response) => {
        alert('User ' + response['username'] + ' has been created');
      },
      (error) => {
        this.returnerror = JSON.stringify(error['error']);
        alert('Error: ' + this.returnerror);
      }
    );
  }
}
