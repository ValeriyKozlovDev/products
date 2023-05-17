import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { ReplaySubject, takeUntil } from 'rxjs';

import { AuthFeature } from './store/auth.reducer';
import { IUser } from './store/interfaces';
import { setLoading, setUserLogin } from './store/auth.actions';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  haveAcc = true
  formGroup!: FormGroup;
  submitted = false

  @Input() formError = '';

  loading$ = this.store.select(AuthFeature.selectLoading)
  loginAgain$ = this.store.select(AuthFeature.selectLoginAgain)

  constructor(
    public auth: AuthService,
    private router: Router,
    private store: Store,
  ) { }

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);


  ngOnInit(): void {
    this.formInit()

  }

  formInit() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    if (this.formGroup.invalid || (!this.haveAcc && !this.formGroup.value.name.length)) {
      return
    }
    this.store.dispatch(setLoading({ data: true }))
    this.submitted = true
    let user: IUser

    if (this.haveAcc) {
      user = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }
      this.signIn(user)
    } else {
      user = {
        email: this.formGroup.value.email,
        name: this.formGroup.value.name,
        password: this.formGroup.value.password
      }
      this.auth.create(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
        this.signIn(user)
      }, () => {
        this.submitted = false
      }
      )
    }
  }

  signIn(user: IUser) {
    this.auth.login(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
      this.store.dispatch(setLoading({ data: false }))
      this.store.dispatch(setUserLogin({ data: user.email }))
      this.formGroup.reset()
      this.router.navigate(['/products'])
    }, () => {
      this.submitted = false
    }
    )
  }

  accStatus(haveAcc: boolean) {
    this.haveAcc = haveAcc
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
