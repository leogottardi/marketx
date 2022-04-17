import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from 'src/app/auth/auth.service';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService')
    private readonly authService: AuthService,
  ) {}

  @Post()
  async authenticate(@Body() data: IRequest): Promise<IResponse> {
    return await this.authService.execute(data);
  }
}
