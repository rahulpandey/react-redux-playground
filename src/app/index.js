import React from "react";
import { render } from "react-dom";
import { store } from "../app/store";
import { Provider } from "react-redux";
require("../app/scss/styles.scss");
import Home from "./screens/home";
render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("app")
);
