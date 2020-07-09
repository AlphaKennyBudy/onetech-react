import { SET_PRODUCT_QUANTITY } from "../types";

export const setProductQuantity = (id: number, payload: number = 0) => ({
  type: SET_PRODUCT_QUANTITY,
  id,
  payload,
});

// import { ORDER_PRODUCT, CANCEL_PRODUCT } from "../types";

// export const orderProduct = (id: number, payload: number = 1) => ({
//   type: ORDER_PRODUCT,
//   id,
//   payload,
// });

// export const cancelProduct = (id: number, payload: number = 1) => ({
//   type: CANCEL_PRODUCT,
//   id,
//   payload,
// });
