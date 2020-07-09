import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import CartItem from "../CartItem/CartItem";
import { cancelProduct, orderProduct } from "../../store/actions";

function Cart() {
  const state = useSelector(
    (state: { productReducer: ProductType[] }) => state.productReducer
  );
  const dispatch = useDispatch();
  return (
    <table>
      <tr>
        <td>Item</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total Price</td>
        <td></td>
      </tr>
      {state.map((product: ProductType) => {
        return product.quantity ? (
          <CartItem
            {...product}
            onReduce={() => dispatch(cancelProduct(product.id))}
            onIncrease={() => dispatch(orderProduct(product.id))}
            onCancel={() =>
              dispatch(cancelProduct(product.id, product.quantity))
            }
          />
        ) : null;
      })}
    </table>
  );
}

export default Cart;
