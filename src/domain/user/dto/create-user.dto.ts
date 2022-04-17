import { IsEmail, IsNotEmpty, Length, Min } from 'class-validator';

export class ICreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;

  @IsNotEmpty()
  cpf: string;
}
