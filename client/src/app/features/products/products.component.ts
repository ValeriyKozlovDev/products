import { SharedModule } from './../../shared/shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products = [
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name1',
      price: 1,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    },
    {
      name: 'name2',
      price: 2,
      image: 'https://pcshop.ua/image/cache/catalog/tovar/29408_2-1024x768.jpg',
    }
  ]
}
