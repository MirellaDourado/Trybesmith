import { IProductCreated, IProductInsert } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const insert = async (product: IProductInsert): Promise<IProductCreated> => {
  const result = await productsModel.insert(product);
  console.log('SERVICE =>>', result);
  return result;
};

const productsService = {
  insert,
};

export default productsService;