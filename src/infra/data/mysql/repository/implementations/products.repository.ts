import { InjectRepository } from '@nestjs/typeorm';
import { ICreateProductDTO } from 'src/domain/product/dto/create-product-dto';
import { Product } from 'src/domain/product/entities/product.entity';
import { Repository } from 'typeorm';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.productsRepository.create(data);

    return await this.productsRepository.save(product);
  }
}

export { ProductsRepository };
