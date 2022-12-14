import jwt from 'jsonwebtoken';
import { User } from '../interfaces/userInterface';

const secret = process.env.JWT_SECRET || 'jwtSecret';

const jwtConfig: object = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

export default function createToken(user: User) {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
}
