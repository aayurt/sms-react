import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import dashboard from "./component/dashboard";
export default function Homepage() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Route path="/dashboard" component={dashboard} />
    </Switch>
  );
}
