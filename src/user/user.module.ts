import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserEntity } from '../entities/User.entity';
import { UserResolver } from './user.resolver';
import { UserEntityRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  controllers: [UserResolver],
  providers: [UserService, UserEntityRepository],
})
export class UserModule {}
