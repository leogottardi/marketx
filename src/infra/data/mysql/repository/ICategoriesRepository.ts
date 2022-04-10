import { ICreateCategoryDTO } from 'src/domain/categoy/dto/create-category-dto';
import { Category } from 'src/domain/categoy/entities/category.entity';

export interface ICategoriesRepository {
  create(createCategoryDTO: ICreateCategoryDTO): Promise<Category>;
}
