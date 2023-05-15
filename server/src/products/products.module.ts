import { ProductsProviders } from './providers/products.providers';
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...ProductsProviders]
})
export class ProductsModule { }
