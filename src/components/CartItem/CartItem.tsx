import React from "react";
import { ProductType } from "../../store/types";

type DispatchedProductType = ProductType & {
  onReduce: () => void;
  onIncrease: () => void;
  onCancel: () => void;
};

function CartItem({
  name,
  price,
  quantity,
  onReduce,
  onIncrease,
  onCancel,
}: DispatchedProductType) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="number" value={quantity} />
      </td>
      <td>{price * quantity}</td>
      <td>
        <button onClick={onCancel}>Delete</button>
      </td>
    </tr>
  );
}

export default CartItem;
