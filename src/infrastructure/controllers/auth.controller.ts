import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterUserUseCase } from '@application/use-cases/register-user/register-user.use-case';
import { RegisterUserHttpDto } from '../dtos/register-user.http.dto';
import { UserPresenter } from '../presenters/user.presenter';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Registrar un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos de registro inválidos.' })
  @ApiResponse({ status: 409, description: 'El email ya está en uso.' })
  async register(@Body() body: RegisterUserHttpDto) {
    const user = await this.registerUserUseCase.execute(body);
    return UserPresenter.toResponse(user);
  }
}
