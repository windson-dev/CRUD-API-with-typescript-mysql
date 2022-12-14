import express from 'express';
import productController from './controller/productController';

const app = express();
// ...
app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);

export default app;
