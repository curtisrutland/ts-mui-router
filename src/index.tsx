import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./components/layout/AppContainer";
import "./index.css";
import "typeface-roboto";
import { configureStore } from "./store";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker(() => {
  console.log("update availble.");
});
