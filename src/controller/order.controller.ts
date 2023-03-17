import { Request, Response } from 'express';
import orderService from '../service/order.service';

const getAll = async (_req: Request, res: Response) => {
  const orders = await orderService.getAll();

  return res.status(200).json(orders);
};

const orderController = {
  getAll,
};

export default orderController;