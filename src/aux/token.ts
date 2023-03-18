import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (data:string):string => jwt.sign(
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