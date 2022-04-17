import { Module } from '@nestjs/common';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: 'AuthService',
      useClass: AuthService,
    },
  ],
  imports: [UsersModule],
})
export class AuthModule {}
