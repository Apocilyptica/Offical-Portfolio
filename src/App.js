import React from "react";
import { Route, Switch } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// pages
import LandingPage from "./pages/LandingPage";

// default styles
import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => (
            <MainLayout>
              <LandingPage />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
