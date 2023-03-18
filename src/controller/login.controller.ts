import { Response, Request } from 'express';
import { IUserLogin } from '../interfaces/user.interface';

import userService from '../service/user.service';

const login = async (req: Request<object, object, IUserLogin>, res: Response) => {
  const user = req.body;
  const token = await userService.login(user);

  return res.status(200).json({ token });
};

export default login;