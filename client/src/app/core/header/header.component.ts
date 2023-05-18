import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../auth/services/auth.service';
import { logout } from '../../auth/store/auth.actions';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(
    private _auth: AuthService,
    private _store: Store,
    private _router: Router,
  ) { }

  public logout(): void {
    this._store.dispatch(logout())
  }
}
