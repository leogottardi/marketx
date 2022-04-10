import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image_url: string;

  @Column()
  category_id: string;

  @Column()
  announcement_id: string;

  @ManyToOne(() => Announcement)
  @JoinColumn({ name: 'announcement_id' })
  announcement: Announcement;

  @Column()
  for_sale: boolean;
}
