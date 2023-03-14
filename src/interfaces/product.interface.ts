export interface IProductInsert {
  orderId?: number;
  name: string;
  amount: string;
}

export interface IProductCreated {
  id: number;
  name: string;
  amount: string;
}