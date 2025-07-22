import express from 'express'
import { register, login, logout, isAuthorizedUser } from '../controllers/authController.js';
import { authCheck } from '../middleware/authCheck.js'
const userRouter = express.Router();


userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.post('/authCheck', authCheck, isAuthorizedUser);

export default userRouter;