import React from "react";
import FormsFix from "./components/FormsFix";
import FormsVariable from "./components/FormsVariable";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";

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
