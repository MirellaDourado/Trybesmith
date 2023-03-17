import { Response, Request } from 'express';

import userModel from '../service/user.service';
import { IUserCreate } from '../interfaces/user.interface';

const insert = async (req: Request<object, object, IUserCreate>, res:Response) => {
  const user = req.body;
  const token = await userModel.insert(user);
  return res.status(201).json({ token });
};

const userController = {
  insert,
};

export default userController;