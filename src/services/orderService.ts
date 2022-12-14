import orderModel from '../models/orderModel';

const getAll = async () => {
  const orders = await orderModel.getAll();

  return orders;
};

export default { getAll };