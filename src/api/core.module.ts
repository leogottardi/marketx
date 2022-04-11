import { Module } from '@nestjs/common';
import { AnnouncementsModule } from './announcements.module';
import { CategoriesModule } from './categories.module';
import { UsersModule } from './users.module';

@Module({
  imports: [AnnouncementsModule, CategoriesModule, UsersModule],
})
export class CoreModule {}
