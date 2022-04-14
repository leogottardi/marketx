import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';
import { IUsersRepository } from 'src/infra/data/mysql/repository/IUsersRepository';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async create(data: ICreateUserDTO): Promise<User> {
    const { password } = data;

    const password_hash = await hash(password, 8);

    return await this.usersRepository.create({
      ...data,
      password: password_hash,
    });
  }
}
