import express from 'express';

import login from '../controller/login.controller';
import loginMiddleware from '../middlewares/loginMiddleware';

const loginRouter = express.Router();

loginRouter.post(
  '/',
  loginMiddleware.usernameMiddleware,
  loginMiddleware.passwordMiddleware,
  loginMiddleware.validEntriesMiddleware,
  login,
);

export default loginRouter;