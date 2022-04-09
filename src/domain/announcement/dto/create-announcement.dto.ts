export enum CategoryEnum {
  'eletronics' = 'eletronics',
  'clothes' = 'clothes',
  'books' = 'books',
}

export interface IProductDTO {
  title: string;
  description: string;
  value: number;
  category: CategoryEnum;
}

export interface ICreateAnnouncementDTO {
  title: string;
  description: string;
  // products: IProductDTO[];
}
