import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Category } from 'src/domain/categoy/entities/category.entity';
import { CategoriesRepository } from 'src/infra/data/mysql/repository/implementations/categories.repository';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
