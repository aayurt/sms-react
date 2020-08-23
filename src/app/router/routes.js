import React from "react";
import { useSelector } from "react-redux";
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import login from "../component/container/loginContainer";
import LandingPage from "../component/LandingPage";
import logout from "../component/login/logout";
import register from "../component/login/register";

const { REACT_APP_BASE_URL } = process.env;
export const Routes = withRouter(({ history }) => {
  const { isAuthorized } = useSelector(({ auth }) => ({
    isAuthorized: auth.user != null,
  }));
  return (
    <BrowserRouter basename="/">
      <Switch>
        {!isAuthorized ? (
          <Route path="/login" component={login} />
        ) : (
          <Redirect from="/login" to="/dashboard" />
        )}
        <Route path="/logout" component={logout} />
        <Route path="/register" component={register} />
        <Route path="/login" component={login} />

        {!isAuthorized ? <Redirect to="/login" /> : <LandingPage />}
      </Switch>
    </BrowserRouter>
  );
});
