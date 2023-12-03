// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./Reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
 