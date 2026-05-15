import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserHttpDto {
  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'john.doe@example.com' })
  @IsEmail({}, { message: 'El formato del email es inválido' })
  email: string;

  @ApiProperty({ description: 'Contraseña del usuario', minLength: 8, example: 'StrongP@ssw0rd!' })
  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;

  @ApiProperty({ description: 'Nombre completo del usuario', example: 'John Doe' })
  @IsString()
  name: string;
}
