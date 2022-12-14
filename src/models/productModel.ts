import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/productsInterface';
import connection from './connection';

export default async function create(product: Product): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };

  return newProduct;
}
