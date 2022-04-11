import { ICreateUserDTO } from 'src/domain/user/dto/create-user.dto';
import { User } from 'src/domain/user/entities/user.entity';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
}
