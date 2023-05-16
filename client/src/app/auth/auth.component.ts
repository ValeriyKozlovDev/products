import { User } from './store/interfaces';
import { setLoading, setUserLogin } from './store/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { selectLoading, selectLoginAgain } from './store/auth.selectors';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject, takeUntil } from 'rxjs';

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

  loading$ = this.store.select(selectLoading)
  loginAgain$ = this.store.select(selectLoginAgain)

  constructor(
    public auth: AuthService,
    private router: Router,
    private store: Store,
  ) { }

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return
    }
    this.store.dispatch(setLoading({ data: true }))
    this.submitted = true

    const user: User = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
    }
    if (this.haveAcc) {
      this.signIn(user)
    } else {
      this.auth.create(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
        this.signIn(user)
      }, () => {
        this.submitted = false
      }
      )
    }
  }

  signIn(user: User) {
    this.auth.login(user).pipe(takeUntil(this.destroy)).subscribe((response) => {
      this.store.dispatch(setLoading({ data: false }))
      this.store.dispatch(setUserLogin({ data: user.email }))
      this.formGroup.reset()
      this.router.navigate(['/main'])
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
