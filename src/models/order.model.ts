import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/order.interface';
import connection from './connection';

const getAll = async ():Promise<IOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & IOrder[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p 
    ON o.id = p.order_id GROUP BY o.id`,
  );

  return orders;
};

const orderModel = {
  getAll,
};

export default orderModel;