import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch } from "react-router-dom";
import { Route, RouteProps } from "react-router-dom";

const useIsAuthenticated = () => {
  // TODO check if it is authenticated
  return true
}
const useCurrentUser = (isAuthenticated?: boolean) => {
  // TODO get current user info]
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
        if (renderReady)
          return <Component {...props} />

      }}
    />)
}

function App({ history }: { history: History }) {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
