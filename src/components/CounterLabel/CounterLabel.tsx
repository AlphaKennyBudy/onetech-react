import React from "react";
import { useSelector } from "react-redux";

function CounterLabel() {
  const state = useSelector((state) => {
    return state;
  });
  return <h1>{state}</h1>;
}

export default CounterLabel;
