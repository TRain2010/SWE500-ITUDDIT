import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user;
  returnerror;
  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) {}
  isAuthenticated: boolean;
  ngOnInit(): void {
    this.isAuthenticated = false;
  }
  logout(): void {
    this.isAuthenticated = false;
    console.log(document.cookie);
    this.userService.userLogoutService(this.user).subscribe(
      (response) => {
        alert('Logout Success');
      },
      (error) => {
        this.returnerror = JSON.stringify(error['error']);
        alert(this.returnerror);
      }
    );
    console.log('1' + this.cookieService.check('sessionid'));
  }
}
