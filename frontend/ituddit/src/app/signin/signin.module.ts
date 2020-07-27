import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SigninComponent } from './signin.component';

@NgModule({
    declarations: [
        SigninComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [SigninComponent]
  })
  export class SigninModule { }