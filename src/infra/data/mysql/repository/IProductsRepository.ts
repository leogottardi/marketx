import { ICreateProductDTO } from 'src/domain/product/dto/create-product-dto';
import { Product } from 'src/domain/product/entities/product.entity';

export interface IProductsRepository {
  create(createProductDTO: ICreateProductDTO): Promise<Product>;
}
