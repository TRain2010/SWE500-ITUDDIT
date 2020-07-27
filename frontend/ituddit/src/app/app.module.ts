import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    DetailModule,
    HomeModule,
    NavbarModule,
    SigninModule,
    SignupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
