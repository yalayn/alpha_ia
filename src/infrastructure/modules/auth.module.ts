import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { AuthController } from '../controllers/auth.controller';
import { RegisterUserUseCase } from '@application/use-cases/register-user/register-user.use-case';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [RegisterUserUseCase],
})
export class AuthModule {}
