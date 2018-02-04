import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionContainer from './session/session_container';
import NavBarContainer from './navbar/container';
import NavBar from './navbar/navbar';

const App = () => (
  <main>
    <AuthRoute path="/" component={SessionContainer} />
    <ProtectedRoute path="/dashboard" component={NavBarContainer} />
  </main>
);

export default App;
