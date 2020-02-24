import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import SessionContainer from './session/session_container';
import NavBarContainer from './navbar/container';
import Dashboard from './dashboard';
import OktaWidget from './session/okta_widget';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {    
    return (
      <main>
        <AuthRoute path="/welcome" component={OktaWidget} />
        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/" component={Dashboard} />
      </main>
    );
  }
}


export default App;
