import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';
import { IUsersRepository } from 'src/infra/data/mysql/repository/IUsersRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async create(data: ICreateUserDTO): Promise<User> {
    return await this.usersRepository.create(data);
  }
}
