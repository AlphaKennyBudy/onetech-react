import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import CounterLabel from "../../components/CounterLabel/CounterLabel";
import CounterButtons from "../../components/CounterButtons/CounterButtons";
import { CounterWrapper } from "./CounterComponents";

function CounterPage() {
  return (
    <Provider store={store}>
      <CounterWrapper>
        <h1>Counter App</h1>
        <CounterLabel />
        <CounterButtons />
      </CounterWrapper>
    </Provider>
  );
}

export default CounterPage;
