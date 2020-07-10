import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

function MainPage() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MainPage;
