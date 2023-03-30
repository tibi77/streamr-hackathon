import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Display from './components/display/Display';
import Upload from './components/upload/Upload';
import Callback from'./components/Callback';
import Auth from './utils/AuthService';
import history from './utils/History';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


const Routes = () => (
    <App>
      <Switch>
        <Route exact path="/" render={(props) => <Display auth={auth} {...props} />} />
        <Route exact path="/Upload" render={(props) => (!auth.isAuthenticated() ? ( <Redirect to="/"/> ): (<Upload auth={auth} {...props} />))} />
        <Route exact path="/Callback"  render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
    </Switch>
    </App>
   
  );

  export default Routes;