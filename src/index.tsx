import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import "./assets/sass/style.scss";

ReactDOM.render(
  <App greeter="Hello World!" />,
  document.getElementById("root")
);
