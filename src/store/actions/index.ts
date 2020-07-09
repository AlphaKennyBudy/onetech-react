import { SET_PRODUCT_QUANTITY, PRODUCT_ORDERED } from "../types";

export const setProductQuantity = (id: number, payload: number = 0) => ({
  type: SET_PRODUCT_QUANTITY,
  id,
  payload,
});

export const setProductOrdered = (id: number, status: boolean) => ({
  type: PRODUCT_ORDERED,
  id,
  status,
});
