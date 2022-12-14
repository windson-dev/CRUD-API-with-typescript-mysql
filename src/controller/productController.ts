import { Request, Response } from 'express';
import * as productService from '../services/productService';
import { Product } from '../interfaces/productsInterface';

export default async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, payload } = await productService.default(product);
  return res.status(status).json(payload);
}
