import express from 'express';
import userController from '../controller/user.controller';

const userRouter = express.Router();

userRouter.post('/', userController.insert);

export default userRouter;