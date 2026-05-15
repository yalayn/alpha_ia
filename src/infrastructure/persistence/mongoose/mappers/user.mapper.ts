import { User, UserRole } from '@domain/entities/user.entity';
import { UserDocument } from '../schemas/user.schema';

export class UserMapper {
  static toDomain(document: UserDocument): User {
    return new User(
      document.id || document._id.toString(),
      document.email,
      document.name,
      document.password,
      document.role as UserRole,
      document.createdAt,
    );
  }

  static toPersistence(user: User) {
    return {
      _id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      role: user.role,
      createdAt: user.createdAt,
    };
  }
}
