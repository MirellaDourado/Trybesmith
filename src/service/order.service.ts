import { IOrder } from '../interfaces/order.interface';
import orderModel from '../models/order.model';

const getAll = async (): Promise<IOrder[]> => {
  const orders = await orderModel.getAll();

  return orders;
};

const orderService = {
  getAll,
};

export default orderService;