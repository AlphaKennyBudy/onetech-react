import { ProductType, SET_PRODUCT_QUANTITY, PRODUCT_ORDERED } from "../types";

const products: ProductType[] = [
  {
    id: 1,
    name: "Laptop",
    price: 750,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FpRKXeVbKWa1Wo75eOMva5FrE7QCREZgJj8iWNRZf9me2BcCRg",
    quantity: 0,
    ordered: false,
  },
  {
    id: 2,
    name: "Tesla X",
    price: 133000,
    image:
      "http://st.motortrend.com/uploads/sites/5/2016/03/2016-Tesla-Model-X-P90D-front-three-quarter-doors-open.jpg",
    quantity: 0,
    ordered: false,
  },
];

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
