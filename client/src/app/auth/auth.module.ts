
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import { AuthFeature } from './store/auth.reducer';

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
    StoreModule.forFeature(AuthFeature),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    CommonModule,
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
