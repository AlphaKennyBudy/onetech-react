import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import getFood from "../../services/auth.service";
import { fetchProducts } from "../../store/actions";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const products = await getFood();
      dispatch(fetchProducts(products));
    }
    fetchData();
  }, []);
  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={20}>
          <Cart />
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col span={20}>
          <Products />
        </Col>
      </Row>
    </>
  );
}

export default MainPage;
