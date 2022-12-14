import express from 'express';
import productController from './controller/productController';
import userController from './controller/userController';
import orderController from './controller/orderController';
import loginController from './controller/loginController';
import isValidLogin from './middlewares/isValidLogin';

const app = express();
// ...
app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.create);
app.get('/orders', orderController.getAll);
app.post('/login', isValidLogin.isValidLogin, loginController.login);

export default app;
