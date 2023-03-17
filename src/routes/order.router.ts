import express from 'express';
import orderController from '../controller/order.controller';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAll);

export default orderRouter;