import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { USERS_REPOSITORY } from '../constants/users.constants';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private readonly userRepository: typeof User,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser: User = await this.userRepository.create<User>(createUserDto);

    if (!newUser) {
      throw new HttpException('Could not create', HttpStatus.BAD_REQUEST)

    }

    return newUser;
  }

  async findUserByEmailWithPassword(email: string): Promise<User> {
    const user: User = await this.userRepository.findOne<User>({
      where: { email },
    });

    if (!user) {
      // throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
    }

    return user;
  }

  async findUserById(id: number): Promise<User> {
    const user: User = await this.userRepository.findOne<User>({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
    }

    return user;
  }

  async editUserProfile(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const isUserUpdated = await this.userRepository.update(updateUserDto, {
      where: { id },
    });

    return await this.userRepository.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });
  }


}
