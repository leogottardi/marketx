import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { AnnouncementsService } from 'src/app/announcements/announcements.service';
import { ICreateAnnouncementProductsDTO } from 'src/domain/announcement/dto/create-announcement-products.dto';
import { Announcement } from 'src/domain/announcement/entities/announcement.entity';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  async create(
    @Body() data: ICreateAnnouncementProductsDTO,
  ): Promise<Announcement> {
    return await this.announcementsService.create(data);
  }

  @Get('/:id')
  async find(@Param('id') id: string): Promise<Announcement> {
    return await this.announcementsService.find(id);
  }

  @Get()
  async findAll(): Promise<Announcement[]> {
    return await this.announcementsService.findAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.announcementsService.delete(id);
  }
}
