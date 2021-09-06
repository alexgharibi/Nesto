import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LoansContextProvider } from "./State/loans-context";

ReactDOM.render(
  <LoansContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoansContextProvider>,
  document.getElementById("root")
);
