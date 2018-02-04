import React from 'react';
import SessionContainer from './session/session_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <main className="main">
    <AuthRoute path="/" component={SessionContainer} />
  </main>
);

export default App;

// <ProtectedRoute path="/dashboard" component={SessionContainer} />
