import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import loginService from '../services/loginService';

const isValidLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    username: Joi.string().not().empty()
      .required(),
    password: Joi.string().not().empty()
      .required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { serviceError } = await loginService.login(req.body);

  if (serviceError) {
    return res.status(401).json(serviceError);
  }

  return next();
};

export default { isValidLogin };
