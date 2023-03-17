import { ResultSetHeader } from 'mysql2/promise';
import { IUserCreate } from '../interfaces/user.interface';
import connection from './connection';

const insert = async (user: IUserCreate) => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );
};

const userModel = {
  insert,
};

export default userModel;