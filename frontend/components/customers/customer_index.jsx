import React from 'react';
import { Link } from 'react-router-dom';

class CustomerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {

    let customerList = this.props.customers.map(customer => (
      <Link to={`/customers/${customer.id}`}>
        <ul className="customer-item" key={customer.id}>
          <li><h3>{customer.name}</h3></li>
          <li>Monthly Api Limit: {customer.monthly_api_limit}</li>
          <li>Billing Address: {customer.billing_address}</li>
          <li>Billing Email: {customer.billing_email}</li>
          <li>Overage Unit Cost: {customer.overage_unit_cost}</li>
          <li>Start Date: {customer.start_date}</li>
        </ul>
      </Link>
      )
    );

    return (
      <div className="customer-index-container">
        <h2>Customers</h2>
        {customerList}
      </div>
    );
  }
}

export default CustomerIndex;
