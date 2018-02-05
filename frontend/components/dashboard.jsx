import React from 'react';
import { Route } from 'react-router-dom';
import LeftNavContainer from './leftnav/leftnav_container';
import CustomerIndexContainer from './customers/customer_index_container';
import CustomerShowContainer from './customers/customer_show_container';
import BillIndexContainer from './bills/bill_index_container';

const Dashboard = () => (
  <section className="dashboard-container">
    <LeftNavContainer />
    <div className="dashboard">
      <Route exact path="/dashboard" component={BillIndexContainer} />
      <Route exact path="/customers" component={CustomerIndexContainer} />
      <Route exact path="/customers/:customerId" component={CustomerShowContainer} />
    </div>
  </section>
);

export default Dashboard;
