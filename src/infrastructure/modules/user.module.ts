import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../persistence/mongoose/schemas/user.schema';
import { MongooseUserRepository } from '../persistence/mongoose/repositories/mongoose-user.repository';
import { USER_REPOSITORY } from '@domain/ports/user.repository.port';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: MongooseUserRepository,
    },
  ],
  exports: [USER_REPOSITORY],
})
export class UserModule {}
