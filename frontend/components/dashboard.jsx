import React from 'react';
import { Route } from 'react-router-dom';
import LeftNavContainer from './leftnav/leftnav_container';
import CustomerIndexContainer from './customers/customer_index_container';

const Dashboard = () => (
  <section className="dashboard-container">
    <LeftNavContainer />
    <div className="dashboard">
      <Route path="/customers" component={CustomerIndexContainer} />
    </div>
  </section>
);

export default Dashboard;
