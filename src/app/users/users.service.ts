import { Injectable } from '@nestjs/common';
import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';
import { UsersRepository } from 'src/infra/data/mysql/repository/implementations/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(data: ICreateUserDTO): Promise<User> {
    return await this.usersRepository.create(data);
  }
}
