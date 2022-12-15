import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateStatus = (type: string) => {
  if (type === 'any.required') {
    return 400;
  }
  return 422;
};

const isValidCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    username: Joi.string().min(3).not().empty()
      .required(),
    vocation: Joi.string().min(3).not().empty()
      .required(),
    password: Joi.string().min(8).not().empty()
      .required(),
    level: Joi.number().min(1).not().empty()
      .required()
      .messages({
        'string.min': '"password" length must be 8 characters long',
      }),
  }).validate(req.body);

  if (error) {
    return res.status(validateStatus(error.details[0].type)).json({ message: error.message });
  }

  return next();
};

export default { isValidCreateUser };
