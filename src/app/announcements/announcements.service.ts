import { Injectable } from '@nestjs/common';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { ICreateAnnouncementDTO } from 'src/domain/announcement/dto/create-announcement.dto';
import { AnnouncementRepository } from 'src/infra/data/mysql/repository/implementations/Announcement.repository';

@Injectable()
export class AnnouncementsService {
  constructor(private announcementRepository: AnnouncementRepository) {}

  async create(
    createAnnouncementDto: ICreateAnnouncementDTO,
  ): Promise<Announcement> {
    const announcement = this.announcementRepository.create(
      createAnnouncementDto,
    );

    return announcement;
  }

  async find(id: string): Promise<Announcement> {
    return this.announcementRepository.find(id);
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementRepository.findAll();
  }

  async delete(id: string): Promise<any> {
    return this.announcementRepository.delete(id);
  }
}
