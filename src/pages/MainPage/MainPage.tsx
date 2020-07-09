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
      <Row>
        <Col span={2} />
        <Col span={20}>
          <Cart />
        </Col>
        <Col span={2} />
      </Row>
      <Row>
        <Col span={24}>
          <Products />
        </Col>
      </Row>
    </Provider>
  );
}

export default MainPage;
