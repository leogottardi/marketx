import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementsModule } from './announcements.module';
import { CategoriesModule } from './categories.module';
import { UsersModule } from './users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AnnouncementsModule,
    CategoriesModule,
    UsersModule,
  ],
})
export class AppModule {}
