import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Finance = ({component: Component, path, role, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    (role === "Finance") ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/dashboard" />
    )
  )}/>
);


const mapStateToProps = state => {
  return {role: state.session.currentUser.role};
};

export const FinanceRoute = withRouter(
  connect(mapStateToProps, null)(Finance)
);
