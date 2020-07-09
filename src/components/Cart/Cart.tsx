import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../store/types";
import CartItem from "../CartItem/CartItem";
import { setProductQuantity } from "../../store/actions";

function Cart() {
  const state = useSelector(
    (state: { productReducer: ProductType[] }) => state.productReducer
  );
  const dispatch = useDispatch();

  const calculateTotal = () => {
    let total = state.reduce((prev, cur) => {
      return prev + cur.quantity * cur.price;
    }, 0);
    return total ? total : 0;
  };
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
            onChange={(payload: number) =>
              dispatch(setProductQuantity(product.id, payload))
            }
            onCancel={() => dispatch(setProductQuantity(product.id))}
          />
        ) : null;
      })}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{calculateTotal()}</td>
      </tr>
    </table>
  );
}

export default Cart;
