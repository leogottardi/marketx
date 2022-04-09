import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementModule } from './announcement.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AnnouncementModule],
})
export class AppModule {}
