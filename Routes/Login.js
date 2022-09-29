import express from 'express';
import { login, LogPost } from '../controller/Login';

export const LogRouter = express.Router();


LogRouter.post("/Signup",LogPost);
LogRouter.post("/login",login);