import React from "react";
import { Route, Switch } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// pages
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

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
        <Route
          path="/home"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/trashcan"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/readme"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/aboutme"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/projects"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
        <Route
          path="/google"
          render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
