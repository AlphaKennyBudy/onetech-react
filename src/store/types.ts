import { type } from "os";
export const ORDER_PRODUCT = "ORDER_PRODUCT";
export const CANCEL_PRODUCT = "CANCEL_PRODUCT";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
