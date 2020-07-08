import { createStore } from "redux";
import Reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(Reducer, composeWithDevTools());
