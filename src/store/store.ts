import { createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// let store = createStore(counterReducer, composeWithDevTools());
let store = createStore(counterReducer);

export default store;
