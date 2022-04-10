import { ICreateProductDTO } from 'src/domain/product/dto/create-product-dto';

export interface ICreateAnnouncementProductsDTO {
  title: string;
  description: string;
  products: ICreateProductDTO[];
}
