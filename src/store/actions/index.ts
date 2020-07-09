import { ORDER_PRODUCT, CANCEL_PRODUCT } from "../types";

export const orderProduct = (id: number) => {
  type: ORDER_PRODUCT;
  id;
};

export const cancelProduct = (id: number) => {
  type: CANCEL_PRODUCT;
  id;
};
