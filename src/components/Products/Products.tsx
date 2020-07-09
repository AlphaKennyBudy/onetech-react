import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import Product from "../Product/Product";
import { setProductQuantity } from "../../store/actions";

function Products() {
  const state = useSelector(
    (state: { productReducer: ProductType[] }) => state.productReducer
  );
  const dispatch = useDispatch();
  return (
    <ul>
      {state.map((product: ProductType) => {
        return (
          <Product
            {...product}
            onClick={() => {
              dispatch(setProductQuantity(product.id, product.quantity + 1));
            }}
          />
        );
      })}
    </ul>
  );
}

export default Products;
