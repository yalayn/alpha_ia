import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePlanUseCase } from '@application/use-cases/create-plan/create-plan.use-case';
import { CreatePlanHttpDto } from '../dtos/create-plan.http.dto';
import { PlanPresenter } from '../presenters/plan.presenter';

@ApiTags('Plans')
@Controller('plans')
export class PlanController {
  constructor(private readonly createPlanUseCase: CreatePlanUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear un nuevo plan de suscripción' })
  @ApiResponse({ status: 201, description: 'Plan creado exitosamente.' })
  @ApiResponse({ status: 409, description: 'El nombre del plan ya existe.' })
  async create(@Body() body: CreatePlanHttpDto) {
    const result = await this.createPlanUseCase.execute(body);
    return PlanPresenter.toResponse(result);
  }
}
