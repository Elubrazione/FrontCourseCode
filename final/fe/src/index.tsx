import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./apis/redux/store";
import App from "./App";

const app = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);