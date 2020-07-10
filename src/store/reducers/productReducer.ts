import { ProductType, SET_PRODUCT_QUANTITY, PRODUCT_ORDERED } from "../types";
import { products } from "../products";

const productReducer = (state: ProductType[] = products, action: any) => {
  switch (action.type) {
    case SET_PRODUCT_QUANTITY:
      return state.map((product: ProductType) =>
        product.id === action.id
          ? { ...product, quantity: action.payload }
          : product
      );
    case PRODUCT_ORDERED:
      return state.map((product: ProductType) =>
        product.id === action.id
          ? { ...product, ordered: action.status }
          : product
      );
    default:
      return state;
  }
};

export default productReducer;
