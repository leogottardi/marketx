import { ICreateAnnouncementDTO } from 'src/domain/announcement/dto/create-announcement.dto';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';

export interface IAnnouncementRepository {
  create(createAnnouncementDto: ICreateAnnouncementDTO): Promise<Announcement>;
  find(id: string): Promise<Announcement>;
  findAll(): Promise<Announcement[]>;
  delete(id: string): Promise<void>;
}
