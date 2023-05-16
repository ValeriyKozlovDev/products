import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [SharedModule]
})
export class HeaderComponent {
}
