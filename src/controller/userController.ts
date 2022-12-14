import { Request, Response } from 'express';
import userService from '../services/userService';
import { User } from '../interfaces/userInterface';

const create = async (req: Request, res: Response) => {
  const user = req.body as User;
  const payload = await userService.create(user);

  return res.status(201).json(payload);
};

export default { create };