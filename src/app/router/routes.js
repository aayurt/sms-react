import React from "react";
import {
  Redirect,
  Route,
  Switch,
  withRouter,
  HashRouter,
} from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import logout from "./component/login/logout";
import Homepage from "./Homepage";
import login from "./component/container/loginContainer";
import register from "./component/login/register";
const { REACT_APP_BASE_URL } = process.env;
export const Routes = withRouter(({ history }) => {
  const { isAuthorized } = useSelector(({ auth }) => ({
    isAuthorized: auth.user != null,
  }));
  return (
    <HashRouter basename="/">
      <Switch>
        {!isAuthorized ? (
          <Route path="/login" component={login} />
        ) : (
          <Redirect from="/login" to="/dashboard" />
        )}
        <Route path="/logout" component={logout} />
        <Route path="/register" component={register} />
        <Route path="/login" component={login} />

        {!isAuthorized ? <Redirect to="/login" /> : <Homepage />}
      </Switch>
    </HashRouter>
  );
});
