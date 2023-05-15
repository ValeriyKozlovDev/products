import { UsersProviders } from './providers/users.providers';
import { UsersService } from './services/users.service';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';


@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService]
})
export class UsersModule { }
