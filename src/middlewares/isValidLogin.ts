import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

const isValidLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const { error } = await loginService.login(req.body);

  if (error) {
    return res.status(401).json(error);
  }

  return next();
};

export default { isValidLogin };
