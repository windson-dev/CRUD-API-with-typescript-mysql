import * as productModel from '../models/productModel';
import { Product } from '../interfaces/productsInterface';

export default async function create(product: Product) {
  const payload = await productModel.default(product);

  return { status: 201, payload };
}
