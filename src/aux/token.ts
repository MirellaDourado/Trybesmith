import jwt from 'jsonwebtoken';
import { IUserCreate } from '../interfaces/user.interface';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (data:IUserCreate):string => jwt.sign(
  { data },
  secret,
  { algorithm: 'HS256', expiresIn: '10min' },
);

const verifyToken = (token:string) => jwt.verify(token, secret);

const verification = {
  createToken,
  verifyToken,
};

export default verification;