import { IsNotEmpty, MinLength, IsEmail, IsString } from 'class-validator';

export class LoginUserDto {

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @MinLength(6)
  @IsNotEmpty()
  readonly password: string;
}
