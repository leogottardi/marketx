import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { AnnouncementsService } from 'src/app/announcements/announcements.service';
import { ICreateAnnouncementProductsDTO } from 'src/domain/announcement/dto/create-announcement-products.dto';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  create(@Body() data: ICreateAnnouncementProductsDTO) {
    return this.announcementsService.create(data);
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.announcementsService.find(id);
  }

  @Get()
  findAll() {
    return this.announcementsService.findAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.announcementsService.delete(id);
  }
}
