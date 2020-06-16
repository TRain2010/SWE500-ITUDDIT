import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user;
  returnerror;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = {
      username: '',
      password: '',
    };
  }

  userLogIn() {
    this.userService.userLoginService(this.user).subscribe(
      (response) => {
        alert('Login Success');
      },
      (error) => {
        this.returnerror = JSON.stringify(error['error']);
        alert(this.returnerror);
      }
    );
  }
}
