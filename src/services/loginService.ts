import loginModel from '../models/loginModel';
import { UserCredentials } from '../interfaces/userInterface';
import createToken from '../middlewares/jwtConfig';

const login = async (userCredentials: UserCredentials) => {
  const loginUser = await loginModel.getByUserName(userCredentials.username);

  if (!loginUser || loginUser.password !== userCredentials.password) {
    return { error: { message: 'Username or password invalid' } };
  }

  const token = createToken(loginUser);
  
  return { token };
};

export default { login };