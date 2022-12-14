import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/orderInterface';

const getAll = async (): Promise<Order[]> => {
  const query = `SELECT orders.id as id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders as orders
  INNER JOIN Trybesmith.products as products
  ON products.order_id = orders.id
  GROUP BY orders.id`;

  const [orders] = await connection.execute<RowDataPacket[]>(query);

  return orders as Order[];
};

export default { getAll };