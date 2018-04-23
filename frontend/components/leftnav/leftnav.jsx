import React from 'react';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component {
  constructor(props) {
    super(props);

    this.renderCreateBill = this.renderCreateBill.bind(this);
  }

  componentDidMount() {
    this.props.fetchBills();
    this.props.fetchCustomers();
  }

  renderCreateBill() {
    if (this.props.currentUser.role === "Finance") {
      return (
        <li><Link to={`/newBill`}><h2>Create New Bill</h2></Link></li>
      );
    } else {
      return (<li></li>);
    }
  }

  render() {
    // console.log(this.props);
    let bills = this.props.bills;
    let customers = this.props.customers;

    // let billLinkList = bills.map(bill => (
    //   <li key={bill.id}>
    //     <Link to={`/bills/${bill.id}`}>{bill.customer}: ${bill.overage_amount}</Link>
    //   </li>
    // ));

    let customerLinkList = customers.map(customer => (
      <li key={customer.id}>
        <Link to={`/customers/${customer.id}`}>{customer.name}</Link>
      </li>
    ));

    return (
      <div className="leftnav-container">
        <div className="links">
          <Link to={`/dashboard`}>
            <h2>Dashboard</h2>
          </Link>
            <ul>
              {this.renderCreateBill()}
            </ul>
        </div>

        <div className="links">
          <Link to={`/dashboard`}><h2>Bills</h2></Link>
            <ul>
              <li><Link to={`/dashboard`}><h2>ALL</h2></Link></li>
              <li><Link to={`/dashboard/draft`}><h2>DRAFT</h2></Link></li>
              <li><Link to={`/dashboard/final`}><h2>FINAL</h2></Link></li>
              <li><Link to={`/dashboard/sent`}><h2>SENT</h2></Link></li>
              <li><Link to={`/dashboard/writeoff`}><h2>WRITEOFF</h2></Link></li>
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
