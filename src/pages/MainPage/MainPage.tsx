import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";

function MainPage() {
  return (
    <Provider store={store}>
      <Cart />
      <Products />
    </Provider>
  );
}

export default MainPage;
