import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
