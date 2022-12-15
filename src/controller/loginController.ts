import { Request, Response } from 'express';
import { UserCredentials } from '../interfaces/userInterface';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response) => {
  const userCredentials = req.body as UserCredentials;

  const { token } = await loginService.login(userCredentials);

  return res.status(200).json({ token });
};

export default { login };