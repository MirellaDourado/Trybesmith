import { Request, Response } from 'express';
import HttpException from '../httpException';
import { IProductInsert } from '../interfaces/product.interface';
import productsService from '../service/products.service';

const insert = async (req:Request<object, object, IProductInsert>, res:Response) => {
  try {
    const { body } = req;
    const createdProduct = await productsService.insert(body);
    return res.status(201).json(createdProduct);
  } catch (error) {
    const alert = error as Error;
    throw new HttpException(500, alert.message);
  }
};

const getAll = async (_req:Request, res:Response) => {
  try {
    const allProducts = await productsService.getAll();
    return res.status(200).json(allProducts);
  } catch (error) {
    const alert = error as Error;
    throw new HttpException(500, alert.message);
  }
};

const productsController = {
  insert,
  getAll,
};

export default productsController;