import { ChangeDetectionStrategy, Component, OnInit, Provider } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { AuthFeature } from './store/auth.reducer';
import { IUser } from './store/interfaces';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { login, register } from './store/auth.actions';
import { AuthService } from './services/auth.service';
import { DestroyDirective } from '../shared/directives/destroy.directive';
import { SharedModule } from '../shared/shared.module';
import { TextInputComponent } from '../shared/text-input/text-input.component';
import { AuthGuard } from './guards/auth.guard';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    TextInputComponent
  ],
  providers: [
    AuthGuard,
    INTERCEPTOR_PROVIDER,
    AuthService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [DestroyDirective],
})
export class AuthComponent implements OnInit {

  public registered = true
  public formGroup!: FormGroup;
  public submitted = false
  public loading$ = this._store.select(AuthFeature.selectLoading)
  public loginAgain$ = this._store.select(AuthFeature.selectLoginAgain)

  constructor(
    public auth: AuthService,
    private _store: Store,
  ) { }

  public ngOnInit(): void {
    this.formInit()
  }

  private _signIn(user: IUser): void {
    this._store.dispatch(login({ data: user }))
    this.formGroup.reset()
    this.submitted = false
  }

  private formInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit() {
    if (this.formGroup.invalid || (!this.registered && !this.formGroup.value.name.length)) {
      return
    }
    this.submitted = true
    let user: IUser

    if (this.registered) {
      user = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }
      this._signIn(user)
    } else {
      user = {
        email: this.formGroup.value.email,
        name: this.formGroup.value.name,
        password: this.formGroup.value.password
      }
      this._store.dispatch(register({ user: user }))
      this.submitted = false
    }
  }

  public changeRegistered(registered: boolean): void {
    this.registered = registered
  }
}
