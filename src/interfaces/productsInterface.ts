export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface IProduct extends Product {
  orderId: number;
}
