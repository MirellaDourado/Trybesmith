import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProductCreated, IProductInsert } from '../interfaces/product.interface';
import connection from './connection';

const insert = async (product: IProductInsert): Promise<IProductCreated> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  return { id: insertId, ...product };
};

const getAll = async (): Promise<IProductInsert[]> => {
  const [result] = await connection.execute<RowDataPacket[] & IProductInsert[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result;
};

const productsModel = {
  insert,
  getAll,
};

export default productsModel;