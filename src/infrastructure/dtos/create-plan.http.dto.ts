import { IsString, IsNumber, IsArray, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanHttpDto {
  @ApiProperty({ description: 'Nombre descriptivo del plan', example: 'Premium' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Precio del plan', example: 29.99 })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Moneda (ISO 4217)', example: 'USD' })
  @IsString()
  currency: string;

  @ApiProperty({ description: 'Intervalo de facturación', enum: ['month', 'year'], example: 'month' })
  @IsEnum(['month', 'year'])
  interval: 'month' | 'year';

  @ApiProperty({ description: 'Lista de funcionalidades incluidas', example: ['ai_chat', 'image_gen'] })
  @IsArray()
  @IsString({ each: true })
  features: string[];
}
