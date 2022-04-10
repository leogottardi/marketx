import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from 'src/app/categories/categories.service';
import { ICreateCategoryDTO } from 'src/domain/categoy/dto/create-category-dto';
import { Category } from 'src/domain/categoy/entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(
    @Body() createCategoryDTO: ICreateCategoryDTO,
  ): Promise<Category> {
    const category = await this.categoriesService.create(createCategoryDTO);

    return category;
  }
}
