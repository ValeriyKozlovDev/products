import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AuthModule { }
