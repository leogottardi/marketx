import { Injectable } from '@nestjs/common';
import { ICreateCategoryDTO } from 'src/domain/categoy/dto/create-category-dto';
import { Category } from 'src/domain/categoy/entities/category.entity';
import { CategoriesRepository } from 'src/infra/data/mysql/repository/implementations/categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.create(data);

    return category;
  }
}
