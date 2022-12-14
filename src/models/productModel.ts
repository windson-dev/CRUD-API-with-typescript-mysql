import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, Product } from '../interfaces/productsInterface';
import connection from './connection';

const create = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };

  return newProduct;
};

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute<RowDataPacket[]>(query);

  return products as IProduct[];
};

export default { create, getAll };