// export const ORDER_PRODUCT = "ORDER_PRODUCT";
// export const CANCEL_PRODUCT = "CANCEL_PRODUCT";
export const SET_PRODUCT_QUANTITY = "SET_PRODUCT_QUANTITY";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type DispatchedProductType = ProductType & {
  onClick: () => void;
};
