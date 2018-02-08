import React from 'react';
import { Route } from 'react-router-dom';
import { FinanceRoute } from '../util/role_util';
import LeftNavContainer from './leftnav/leftnav_container';
import CustomerIndexContainer from './customers/customer_index_container';
import CustomerShowContainer from './customers/customer_show_container';
import BillIndexContainer from './bills/bill_index_container';
import BillShowContainer from './bills/bill_show_container';
import BillFormContainer from './bills/bill_form_container';

const Dashboard = () => (
  <section className="dashboard-container">
    <LeftNavContainer />
    <div className="dashboard">
      <Route exact path="/dashboard" component={BillIndexContainer} />
      <Route exact path="/dashboard/:status" component={BillIndexContainer} />
      <FinanceRoute exact path="/newBill" component={BillFormContainer} />
      <Route exact path="/bills/:billId" component={BillShowContainer} />
      <Route exact path="/customers" component={CustomerIndexContainer} />
      <Route exact path="/customers/:customerId" component={CustomerShowContainer} />
    </div>
  </section>
);

export default Dashboard;
