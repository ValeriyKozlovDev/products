import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  product = {
    name: 'name1',
    description: 'lalalla',
    price: 1,
    image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
  }
}
