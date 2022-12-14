import { Request, Response } from 'express';
import productService from '../services/productService';
import { Product } from '../interfaces/productsInterface';

const create = async (req: Request, res: Response) => {
  const product = req.body as Product;
  const payload = await productService.create(product);
  
  return res.status(201).json(payload);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  
  return res.status(200).json(products);
};

export default { getAll, create };
