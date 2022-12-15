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
    console.log(error.details[0].type);
    return res.status(validateStatus(error.details[0].type)).json({ message: error.message });
  }

  next();
};

// const isValidUserName = async (req: Request, res: Response, next: NextFunction) => {
//   const { username } = req.body;

//   if (!username) {
//     return res.status(400).json({ message: '"username" is required' });
//   }

//   if (typeof username !== 'string') {
//     return res.status(422).json({ message: '"username" must be a string' });
//   }

//   if (username.length <= 2) {
//     return res.status(422)
//       .json({ message: '"username" length must be at least 3 characters long' });
//   }

//   return next();
// };

// const isValidVocation = async (req: Request, res: Response, next: NextFunction) => {
//   const { vocation } = req.body;

//   if (!vocation) {
//     return res.status(400).json({ message: '"vocation" is required' });
//   }

//   if (typeof vocation !== 'string') {
//     return res.status(422).json({ message: '"vocation" must be a string' });
//   }

//   if (vocation.length <= 2) {
//     return res.status(422)
//       .json({ message: '"vocation" length must be at least 3 characters long' });
//   }

//   return next();
// };

export default { isValidCreateUser };
