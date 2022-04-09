import { Injectable } from '@nestjs/common';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { ICreateAnnouncementDTO } from 'src/domain/announcement/dto/create-announcement.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnnouncementService {
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
    return this.announcementRepository.save(announcement);
  }

  async find(id: string): Promise<Announcement> {
    return this.announcementRepository.findOne({ id });
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementRepository.find();
  }

  async delete(id: string): Promise<any> {
    return this.announcementRepository.delete({ id });
  }
}
