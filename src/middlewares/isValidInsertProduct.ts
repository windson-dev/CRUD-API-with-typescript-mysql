import { Request, Response, NextFunction } from 'express';

const isValidInsertName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  return next();
};

const isValidInsertAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  return next();
};

export default { isValidInsertName, isValidInsertAmount };