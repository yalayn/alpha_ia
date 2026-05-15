import { Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
  id: string;
  email: string;
  name: string;
  password: string;
  role: string;
  createdAt: Date;
}

export const UserSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'customer'] },
  createdAt: { type: Date, default: Date.now },
});
