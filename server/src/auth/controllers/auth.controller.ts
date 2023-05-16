import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

import { AuthService } from '../services/auth.service';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/singup')
    signUp(@Body() userDto: CreateUserDto) {
        return this.authService.signUp(userDto)
    }
}
