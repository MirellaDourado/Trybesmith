import express from 'express';
import productsController from '../controller/product.controller';

const productRouter = express.Router();

productRouter.post('/', productsController.insert);

export default productRouter;