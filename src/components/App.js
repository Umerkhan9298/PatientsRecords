import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import PatientPage from "./patient/PatientPage";
import AboutPage from "./about/AboutPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/patient" component={PatientPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
};

export default App;
