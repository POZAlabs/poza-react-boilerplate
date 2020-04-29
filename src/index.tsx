import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { App } from "./pages";

import GlobalStyle from "./utils/globalStyle";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById("app")
);
