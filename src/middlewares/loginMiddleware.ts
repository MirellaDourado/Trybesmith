import { NextFunction, Request, Response } from 'express';
import { IUserLogin } from '../interfaces/user.interface';
import userModel from '../models/user.model';

const usernameMiddleware = (
  req: Request<object, object, IUserLogin>,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.body;

  if (username === undefined) return res.status(400).json({ message: '"username" is required' });

  next();
};

const passwordMiddleware = (
  req: Request<object, object, IUserLogin>,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;

  if (password === undefined) return res.status(400).json({ message: '"password" is required' });

  next();
};

const validEntriesMiddleware = async (
  req: Request<object, object, IUserLogin>,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;
  const user = await userModel.verifyLogin({ username, password }); 
  if (!user.length) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  next();
};

const loginMiddleware = {
  usernameMiddleware,
  passwordMiddleware,
  validEntriesMiddleware,
};

export default loginMiddleware;