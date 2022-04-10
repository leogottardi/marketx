import { InjectRepository } from '@nestjs/typeorm';
import { ICreateCategoryDTO } from 'src/domain/categoy/dto/create-category-dto';
import { Category } from 'src/domain/categoy/entities/category.entity';
import { Repository } from 'typeorm';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepository implements ICategoriesRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDTO: ICreateCategoryDTO): Promise<Category> {
    const category = this.categoriesRepository.create(createCategoryDTO);

    return await this.categoriesRepository.save(category);
  }
}
