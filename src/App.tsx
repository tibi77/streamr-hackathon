import React, { useEffect, useState } from 'react';
import './App.css';
import { Router, Switch } from "react-router-dom";
import { Route, RouteProps } from "react-router-dom";
import { createBrowserHistory } from "history";

const useIsAuthenticated = () => {
  // TODO check if it is authenticated
  return true
}
const useCurrentUser = (isAuthenticated?: boolean) => {
  // TODO get current user info
  if (!isAuthenticated)
    return {
      isLoading: true, data: {
        name: "tb",
        pic: "??"
      }
    }
  return {
    isLoading: false, data: {
      name: "tb",
      pic: "??"
    }
  }
}
const Login = () => {
  return <>
    Login

  </>
}
const Dashboard = () => {
  return <>
    Dashboard

  </>
}
const Upload = () => {
  return <>
    Upload

  </>
}
const Profile = () => {
  return <>
    Profile

  </>
}
function PrivateRoute({
  component: Component,
  ...rest
}: RouteProps) {
  const isAuthenticated = useIsAuthenticated();
  const user = useCurrentUser(isAuthenticated);

  const [renderReady, setRenderReady] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      // TODO auth the user
    } else {
      if (!user.isLoading && user.data) {
        setRenderReady(true);
      }
    }
  }, [isAuthenticated, user.data, user.isLoading]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (renderReady && Component)
          return <Component {...props} />

      }}
    />)
}
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/upload" component={Upload} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
