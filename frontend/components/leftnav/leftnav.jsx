import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBills();
    this.props.fetchCustomers();
  }

  render() {
    console.log(this.props);
    let bills = this.props.bills;
    let customers = this.props.customers;

    let billLinkList = bills.map(bill => (
      <li key={bill.id}>
        <Link to={`/bills/${bill.id}`}>{bill.customer}: ${bill.overage_amount}</Link>
      </li>
    ));

    let customerLinkList = customers.map(customer => (
      <li key={customer.id}>
        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
      </li>
    ))

    return (
      <div className="leftnav-container">
        <div className="links">
          <Link to={`/dashboard`}>
            <h2>Dashboard</h2>
          </Link>
        </div>

        <div className="links">
          <Link to={`/dashboard`}><h2>Bills</h2></Link>
            <ul>
              {billLinkList}
            </ul>
        </div>

        <div className="links">
          <Link to={`/customers`}><h2>Customers</h2></Link>
          <ul>
            {customerLinkList}
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftNav;
