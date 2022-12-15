import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateStatus = (type: string) => {
  if (type === 'any.required') {
    return 400;
  }
  return 422;
};

const isValidInserProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).not().empty()
      .required(),
    amount: Joi.string().min(3).not().empty()
      .required(),
  }).validate(req.body);

  if (error) {
    return res.status(validateStatus(error.details[0].type)).json({ message: error.message });
  }

  return next();
};

export default { isValidInserProduct };