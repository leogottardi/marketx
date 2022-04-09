import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICreateAnnouncementDTO } from '../dto/create-announcement.dto';

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  // @Column()
  // products: IProductDTO[];

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
