import { InjectRepository } from '@nestjs/typeorm';
import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';
import { Repository } from 'typeorm';
import { IUsersRepository } from '../IUsersRepository';


export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create(data);

    return await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }
}
