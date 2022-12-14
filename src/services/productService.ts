import productModel from '../models/productModel';
import { Product } from '../interfaces/productsInterface';

const create = async (product: Product) => {
  const payload = await productModel.create(product);

  return payload;
};

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

export default { getAll, create };
