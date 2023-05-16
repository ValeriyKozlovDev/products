import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [SharedModule, RouterModule],
})
export class ProductComponent {
  @Input() product: any
}
