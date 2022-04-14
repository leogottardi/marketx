import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/app/users/users.service';
import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: ICreateUserDTO): Promise<User> {
    return await this.usersService.create(data);
  }
}
