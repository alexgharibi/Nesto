import React from "react";
import { Route, Switch } from "react-router-dom";
import FormsFix from "./components/FormsFix";
import FormsVariable from "./components/FormsVariable";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

const translationEn = {
  BringJoy: "Bringing Joy to Your Own Home",
  BestRate: "Get Your Best Rate",
  BestFix: "Best Fixed and Variable Rates Are Available",
  Select: "Select",
  SelectAnother: "Select another Application",
  FirstName: "FirstName",
  LastName: "LastName",
  Email: "Email",
  Phone: "Phone Number",
  Required: "Required",
  Submit: "Submit",
};
const translationFr = {
  BringJoy: "La joie d'avoir votre propre maison",
  BestRate: "Obtenez votre meilleur tarif",
  BestFix: "Les meilleurs taux fixes et variables sont disponibles",
  Select: "Choisir",
  SelectAnother: "Sélectionnez une autre application",
  FirstName: "Prénom",
  LastName: "Nom de famille",
  Email: "Courriel",
  Phone: "Téléphone",
  Required: "Obligatoire",
  Submit: "Soumettre",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    fr: { translation: translationFr },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Header />
          <MainPage />
        </Route>
        <Route path="/variable">
          <FormsVariable />
        </Route>
        <Route path="/fix">
          <FormsFix />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
