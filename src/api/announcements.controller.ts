import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { AnnouncementService } from 'src/app/announcements/announcement.service';
import { ICreateAnnouncementDTO } from 'src/domain/announcement/dto/create-announcement.dto';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  create(@Body() createAnnouncementDto: ICreateAnnouncementDTO) {
    return this.announcementService.create(createAnnouncementDto);
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.announcementService.find(id);
  }

  @Get()
  findAll() {
    return this.announcementService.findAll();
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.announcementService.delete(id);
  }
}
