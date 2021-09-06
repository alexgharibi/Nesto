import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { BrowserRouter } from "react-router-dom";
import { LoansContextProvider } from "./State/loans-context";
import { initReactI18next } from "react-i18next";
import "./index.css";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

ReactDOM.render(
  <LoansContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoansContextProvider>,
  document.getElementById("root")
);
