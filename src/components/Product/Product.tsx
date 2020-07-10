import React from "react";
import { DispatchedProductType } from "../../store/types";
import { Card, Button } from "antd";
import Meta from "antd/lib/card/Meta";

function Product({ name, price, image, onClick }: DispatchedProductType) {
  return (
    <Card
      title={<h3>{price} USD</h3>}
      extra={<Button onClick={onClick}>Add to Cart</Button>}
      cover={<img src={image} alt="" />}
    >
      <Meta title={<h4>{name}</h4>} />
    </Card>
  );
}

export default Product;
