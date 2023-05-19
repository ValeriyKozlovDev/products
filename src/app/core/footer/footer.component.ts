import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LINKS } from './constants/links.constant';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public links = LINKS
}
