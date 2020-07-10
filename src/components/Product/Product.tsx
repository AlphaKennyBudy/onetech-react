import React from "react";
import { DispatchedProductType } from "../../store/types";
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";

function Product({ name, price, image, onClick }: DispatchedProductType) {
  return (
    <Card
      title={name}
      extra={<Button onClick={onClick}>Add to Cart</Button>}
      cover={<img src={image} />}
    >
      <Meta title={<h3>Price {price} USD</h3>} />
    </Card>
  );
}

export default Product;
