import { IUserCreate, IUserLogin } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import verification from '../aux/token';

const insert = async (user: IUserCreate) => {
  await userModel.insert(user);

  const token = verification.createToken(user.username);

  return { type: 201, message: token };
};

const login = async (userLogin: IUserLogin) => {
  const token = verification.createToken(userLogin.username);

  return { type: 201, message: token };
};

const userService = {
  insert,
  login,
};

export default userService;