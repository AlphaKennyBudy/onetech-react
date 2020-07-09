import React from "react";
import { ProductType } from "../../store/types";

type DispatchedProductType = ProductType & {
  onChange: (payload: number) => void;
  onCancel: () => void;
};

function CartItem({
  name,
  price,
  quantity,
  onChange,
  onCancel,
}: DispatchedProductType) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />
      </td>
      <td>{price * quantity}</td>
      <td>
        <button onClick={onCancel}>Delete</button>
      </td>
    </tr>
  );
}

export default CartItem;
