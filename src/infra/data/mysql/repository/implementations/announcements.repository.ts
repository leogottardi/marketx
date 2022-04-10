import { Injectable } from '@nestjs/common';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IAnnouncementsRepository } from '../IAnnouncementsRepository';
import { ICreateAnnouncementDTO } from 'src/domain/announcement/dto/create-announcement.dto';

@Injectable()
class AnnouncementsRepository implements IAnnouncementsRepository {
  constructor(
    @InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
  ) {}

  async create(
    createAnnouncementDto: ICreateAnnouncementDTO,
  ): Promise<Announcement> {
    const announcement = this.announcementRepository.create(
      createAnnouncementDto,
    );

    return await this.announcementRepository.save(announcement);
  }

  async find(id: string): Promise<Announcement> {
    return this.announcementRepository.findOne({ id });
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementRepository.find();
  }

  async delete(id: string): Promise<void> {
    this.announcementRepository.delete({ id });
  }
}

export { AnnouncementsRepository };
