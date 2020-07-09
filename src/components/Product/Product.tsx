import React from "react";
import { DispatchedProductType } from "../../store/types";

function Product({ name, price, image, onClick }: DispatchedProductType) {
  return (
    <ul>
      <div>
        <img src={image} />
        <h1>{name}</h1>
        <p>{price}</p>
        <button onClick={onClick}>Add to Cart</button>
      </div>
    </ul>
  );
}

export default Product;
