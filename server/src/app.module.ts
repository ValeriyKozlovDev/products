import { databaseProviders } from './database.providers';
import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';


@Module({
    controllers: [],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
    imports: [
        UsersModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `./../development.env`,
        }),
        AuthModule,
        ProductsModule,
    ],
})
export class AppModule { }