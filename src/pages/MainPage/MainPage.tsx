import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

function MainPage() {
  return <Provider store={store}></Provider>;
}

export default MainPage;
