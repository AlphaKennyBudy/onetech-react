import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import Product from "../Product/Product";
import { setProductQuantity, setProductOrdered } from "../../store/actions";
import { List } from "antd";

function Products() {
  const state = useSelector(
    (state: { productReducer: ProductType[] }) => state.productReducer
  );
  const dispatch = useDispatch();
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={state}
      renderItem={(product: ProductType) => (
        <List.Item>
          <Product
            {...product}
            onClick={() => {
              dispatch(setProductOrdered(product.id, true));
              dispatch(setProductQuantity(product.id, product.quantity + 1));
            }}
          />
        </List.Item>
      )}
    />
  );
}

export default Products;
