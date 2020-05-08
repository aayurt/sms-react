import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import LandingPage from "./component/LandingPage";
export default function Homepage() {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/dashboard" /> */}
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={LandingPage} />
    </Switch>
  );
}
