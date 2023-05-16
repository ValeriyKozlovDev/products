import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from './../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ]),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    INTERCEPTOR_PROVIDER,
    AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
