export const SET_PRODUCT_QUANTITY = "SET_PRODUCT_QUANTITY";
export const PRODUCT_ORDERED = "PRODUCT_ORDERED";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  ordered: boolean;
};

export type DispatchedProductType = ProductType & {
  onClick: () => void;
};
