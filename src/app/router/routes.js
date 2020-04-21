import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
export const Router = withRouter(({ history }) => {
  const lastlocation = useLastLocation();
});
