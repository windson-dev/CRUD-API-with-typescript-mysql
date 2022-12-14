import express from 'express';
import * as productController from './controller/productController';

const app = express();
// ...
app.use(express.json());

app.post('/products', productController.default);

export default app;
