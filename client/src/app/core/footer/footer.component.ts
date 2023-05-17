import { Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [SharedModule]
})
export class FooterComponent {

}
