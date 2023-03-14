import { IProductCreated, IProductInsert } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const insert = async (product: IProductInsert): Promise<IProductCreated> => {
  const result = await productsModel.insert(product);
  return result;
};

const getAll = async (): Promise<IProductInsert[]> => {
  const result = await productsModel.getAll();

  return result;
};

const productsService = {
  insert,
  getAll,
};

export default productsService;