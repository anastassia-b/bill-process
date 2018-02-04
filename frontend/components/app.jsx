import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionContainer from './session/session_container';
import NavBarContainer from './navbar/container';
import Dashboard from './dashboard';

const App = () => (
  <main>
    <AuthRoute path="/welcome" component={SessionContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/" component={Dashboard} />
  </main>
);

export default App;
