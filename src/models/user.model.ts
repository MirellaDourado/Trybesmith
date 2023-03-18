import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IUserCreate, IUserLogin } from '../interfaces/user.interface';
import connection from './connection';

const insert = async (user: IUserCreate) => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );
};

const verifyLogin = async (login:IUserLogin) => {
  const [user] = await connection.execute<IUserCreate & RowDataPacket[]>(
    `SELECT id, username, level, vocation FROM Trybesmith.users
    WHERE username = ? AND password = ?`,
    [login.username, login.password],
  );
  
  return user;
};

const userModel = {
  insert,
  verifyLogin,
};

export default userModel;