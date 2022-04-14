import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnouncementsService } from 'src/app/announcements/announcements.service';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { Product } from 'src/domain/product/entities/product.entity';
import { AnnouncementsRepository } from 'src/infra/data/mysql/repository/implementations/announcements.repository';
import { ProductsRepository } from 'src/infra/data/mysql/repository/implementations/products.repository';
import { AnnouncementsController } from './announcements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Announcement, Product])],
  controllers: [AnnouncementsController],
  providers: [
    AnnouncementsService,
    {
      provide: 'AnnouncementsRepository',
      useClass: AnnouncementsRepository,
    },
    {
      provide: 'ProductsRepository',
      useClass: ProductsRepository,
    },
  ],
})
export class AnnouncementsModule {}
