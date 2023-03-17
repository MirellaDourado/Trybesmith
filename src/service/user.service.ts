import { IUserCreate } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import verification from '../aux/token';

const insert = async (user: IUserCreate) => {
  await userModel.insert(user);

  const token = verification.createToken(user);

  return { type: 201, message: token };
};

const userService = {
  insert,
};

export default userService;