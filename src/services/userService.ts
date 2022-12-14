import userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';
import createToken from '../middlewares/jwtConfig';

const create = async (user: User) => {
  const payload = await userModel.create(user);
  const token = createToken(payload);
  return { token };
};

export default { create };