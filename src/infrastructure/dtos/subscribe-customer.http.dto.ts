import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SubscribeCustomerHttpDto {
  @ApiProperty({ description: 'ID del cliente (UUID o similar)', example: 'cust_12345' })
  @IsString()
  customerId: string;

  @ApiProperty({ description: 'ID del plan obtenido al crear un plan', example: 'uuid-del-plan' })
  @IsString()
  planId: string;

  @ApiProperty({ description: 'ID del método de pago (token o ID de Stripe)', example: 'pm_card_visa' })
  @IsString()
  paymentMethodId: string;
}
