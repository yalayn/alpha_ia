import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateAccessHttpDto {
  @ApiProperty({ description: 'ID del cliente a validar', example: 'cust_12345' })
  @IsString()
  customerId: string;

  @ApiProperty({ description: 'Funcionalidad que se quiere validar', example: 'ai_chat' })
  @IsString()
  featureId: string;
}
