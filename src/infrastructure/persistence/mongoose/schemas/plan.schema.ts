import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'plans', timestamps: false })
export class PlanDocument extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true, enum: ['month', 'year'] })
  interval: string;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop({ required: true })
  createdAt: Date;
}

export const PlanSchema = SchemaFactory.createForClass(PlanDocument);
