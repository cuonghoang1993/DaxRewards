import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./helpers";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
