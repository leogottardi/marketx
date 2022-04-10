import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementsModule } from './announcements.module';
import { CategoriesModule } from './categories.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AnnouncementsModule, CategoriesModule],
})
export class AppModule {}
