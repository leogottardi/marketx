import { Inject, Injectable } from '@nestjs/common';
import { ICreateCategoryDTO } from 'src/domain/categoy/dto/create-category-dto';
import { Category } from 'src/domain/categoy/entities/category.entity';
import { ICategoriesRepository } from 'src/infra/data/mysql/repository/ICategoriesRepository';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.create(data);

    return category;
  }
}
