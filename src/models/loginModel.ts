import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/userInterface';

const getByUserName = async (username: string): Promise<User | null> => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const values = [username];

  const [data] = await connection.execute<RowDataPacket[]>(query, values);
  const [user] = data as User[];

  return user || null;
};

export default { getByUserName };