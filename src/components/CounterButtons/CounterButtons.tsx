import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../actions";
import {
  CounterButton,
  CounterButtonsWrapper,
} from "./CounterButtonsComponents";

function CounterButtons() {
  const dispatch = useDispatch();
  return (
    <CounterButtonsWrapper>
      <CounterButton type="primary" onClick={() => dispatch(increment())}>
        INCREMENT
      </CounterButton>
      <CounterButton type="primary" onClick={() => dispatch(decrement())}>
        DECREMENT
      </CounterButton>
    </CounterButtonsWrapper>
  );
}

export default CounterButtons;
