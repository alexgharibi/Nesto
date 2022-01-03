import React from "react";
import FormsFix from "./components/FormsFix";
import FormsVariable from "./components/FormsVariable";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <MainPage />
            </>
          }
        />
        <Route path="/variable" element={<FormsVariable />} />
        <Route path="/fix" element={<FormsFix />} />
      </Switch>
    </>
  );
}

export default App;
