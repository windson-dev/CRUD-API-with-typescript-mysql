import express from 'express';
import productController from './controller/productController';
import userController from './controller/userController';

const app = express();
// ...
app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.create);

export default app;
