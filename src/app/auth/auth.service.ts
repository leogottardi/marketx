import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from 'src/infra/data/mysql/repository/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import auth from 'src/config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    const is_valid_password = await compare(password, user.password);

    if (!is_valid_password) throw new Error('Invalid password');

    const token = sign({ email }, auth.token_key, {
      subject: user.id,
      expiresIn: '10h',
    });

    return { token };
  }
}
