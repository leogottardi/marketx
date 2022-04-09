import { Connection } from 'typeorm';
import { Announcement } from '../entities/announcement.entity';

export const AnnouncementProvider = [
  {
    provide: 'ANNOUNCEMENT_REPOSITORY',
    useFactory: (connection) => connection.getRepository(Announcement),
    inject: ['DATABASE_CONNECTION'],
  },
];
