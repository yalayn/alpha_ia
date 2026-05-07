import { Plan } from '@domain/entities/Plan';
import { PlanDocument } from '../schemas/plan.schema';

export class PlanMapper {
  static toDomain(doc: PlanDocument): Plan {
    return new Plan(
      doc.id,
      doc.name,
      doc.price,
      doc.currency,
      doc.interval as 'month' | 'year',
      doc.features,
      doc.createdAt,
    );
  }

  static toPersistence(entity: Plan): Partial<PlanDocument> {
    return {
      id: entity.id,
      name: entity.name,
      price: entity.price,
      currency: entity.currency,
      interval: entity.interval,
      features: entity.features,
      createdAt: entity.createdAt,
    };
  }
}
