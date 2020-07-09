import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import Product from "../Product/Product";
import { orderProduct } from "../../store/actions";

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
              dispatch(orderProduct(product.id));
            }}
          />
        );
      })}
    </ul>
  );
}

export default Products;
