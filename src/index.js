import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
  }

  return Promise.resolve();
}

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
