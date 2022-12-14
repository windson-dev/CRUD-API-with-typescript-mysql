import { Request, Response } from 'express';
import { UserCredentials } from '../interfaces/userInterface';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response) => {
  const userCredentials = req.body as UserCredentials;

  const { error, token } = await loginService.login(userCredentials);

  if (error) {
    return res.status(401).json(error);
  }

  return res.status(200).json({ token });
};

export default { login };