import { ProductType, SET_PRODUCT_QUANTITY } from "../types";

const products: ProductType[] = [
  {
    id: 1,
    name: "Laptop",
    price: 750,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FpRKXeVbKWa1Wo75eOMva5FrE7QCREZgJj8iWNRZf9me2BcCRg",
    quantity: 0,
  },
  {
    id: 2,
    name: "Tesla X",
    price: 133000,
    image:
      "http://st.motortrend.com/uploads/sites/5/2016/03/2016-Tesla-Model-X-P90D-front-three-quarter-doors-open.jpg",
    quantity: 0,
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
    default:
      return state;
  }
};

export default productReducer;

// const productReducer = (state: ProductType[] = products, action: any) => {
//   switch (action.type) {
//     case ORDER_PRODUCT:
//       return state.map((product: ProductType) =>
//         product.id === action.id
//           ? { ...product, quantity: product.quantity + action.payload }
//           : product
//       );
//     case CANCEL_PRODUCT:
//       return state.map((product: ProductType) =>
//         product.id === action.id
//           ? product.quantity
//             ? { ...product, quantity: product.quantity - action.payload }
//             : product
//           : product
//       );
//     default:
//       return state;
//   }
// };
