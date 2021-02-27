import "react-app-polyfill/ie9";
import "core-js";
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import usersReducer from "./reducers/userReducer";

const store = createStore(usersReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
