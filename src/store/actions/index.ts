import {
  SET_PRODUCT_QUANTITY,
  PRODUCT_ORDERED,
  FETCH_PRODUCTS,
  ProductType,
} from "../types";

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

export const fetchProducts = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS,
  products,
});
