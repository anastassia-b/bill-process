import React from 'react';
import { Route } from 'react-router-dom';
import LeftNavContainer from './leftnav/leftnav_container';

const Dashboard = () => (
  <section className="dashboard-container">
    <LeftNavContainer />
    <div className="dashboard">
      <p>Dashboard: CustomersIndex / BillsIndex</p>
    </div>
  </section>
);

export default Dashboard;
