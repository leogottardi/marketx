import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementService } from 'src/app/announcements/announcement.service';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { AnnouncementRepository } from 'src/infra/data/mysql/repository/implementations/Announcement.repository';
import { AnnouncementsController } from './announcements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Announcement])],
  controllers: [AnnouncementsController],
  providers: [AnnouncementService, AnnouncementRepository],
})
export class AnnouncementsModule {}
