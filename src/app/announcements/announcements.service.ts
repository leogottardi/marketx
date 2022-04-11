import { Inject, Injectable } from '@nestjs/common';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';
import { ICreateAnnouncementProductsDTO } from 'src/domain/announcement/dto/create-announcement-products.dto';
import { IAnnouncementsRepository } from 'src/infra/data/mysql/repository/IAnnouncementsRepository';
import { IProductsRepository } from 'src/infra/data/mysql/repository/IProductsRepository';

@Injectable()
export class AnnouncementsService {
  constructor(
    @Inject('AnnouncementsRepository')
    private announcementsRepository: IAnnouncementsRepository,
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async create(data: ICreateAnnouncementProductsDTO): Promise<Announcement> {
    const { title, description, products } = data;

    const announcement = await this.announcementsRepository.create({
      title,
      description,
    });

    for (let i = 0; i < products.length; i++) {
      Object.assign(products[i], { announcementId: announcement.id });
      await this.productsRepository.create(products[i]);
    }

    return announcement;
  }

  async find(id: string): Promise<Announcement> {
    return this.announcementsRepository.find(id);
  }

  async findAll(): Promise<Announcement[]> {
    return this.announcementsRepository.findAll();
  }

  async delete(id: string): Promise<any> {
    return this.announcementsRepository.delete(id);
  }
}
