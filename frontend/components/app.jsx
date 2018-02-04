import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionContainer from './session/session_container';
import NavBarContainer from './navbar/container';
import Dashboard from './dashboard/dashboard';

const App = () => (
  <main>
    <AuthRoute path="/" component={SessionContainer} />
    <ProtectedRoute path="/dashboard" component={NavBarContainer} />
    <ProtectedRoute path="/dashboard" component={Dashboard} />
  </main>
);

export default App;
