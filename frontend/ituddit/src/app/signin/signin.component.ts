import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user;
  returnerror;
  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.user = {
      username: '',
      password: '',
    };
  }

  userLogIn() {
    this.userService.userLoginService(this.user).subscribe(
      (response) => {
        this.cookieService.set('bktoken', response['key']);
        alert('Login Success');
      },
      (error) => {
        this.returnerror = JSON.stringify(error['error']);
        alert(this.returnerror);
      }
    );
  }
}
