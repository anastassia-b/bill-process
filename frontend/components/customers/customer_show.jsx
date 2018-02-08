import React from 'react';
import { Link } from 'react-router-dom';
import { firstThreeMonths } from '../../util/calculation';

class CustomerShow extends React.Component {
  constructor(props) {
    super(props);
    this.usageDisplay = this.usageDisplay.bind(this);
    this.buttonDisplay = this.buttonDisplay.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.customerId;
    this.props.fetchCustomer(id);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.customerId;

    if (this.props.match.params.customerId !== id) {
      this.props.fetchCustomer(id);
    }
  }

  usageDisplay(monthlyUsage) {
    if (monthlyUsage > this.props.customer.monthly_api_limit) {
      return (
        <li>Api Usage: <span>{monthlyUsage}</span></li>
      );
    } else {
      return (
        <li>Api Usage: {monthlyUsage}</li>
      );
    }
  }

  buttonDisplay(usage) {
    let start = this.props.customer.start_date;
    let month = usage.month;
    let year = usage.year;

    if (firstThreeMonths(start, month, year)) {
      return (
        <div className="usage-actions">
          <p>First Three Months</p>
        </div>
      );
    } else if (usage.api_usage > this.props.customer.monthly_api_limit) {
      if (this.props.currentUser.role === "Finance") {
        return (
          <div className="usage-actions">
            <Link to="/newBill"><button>Generate Bill</button></Link>
          </div>
        );
      } else {
        return (
          <div className="usage-actions">
            <button>Ask Finance to Generate</button>
          </div>
        );
      }
    } else {
      return (
        <div className="usage-actions">
          <p>Under monthly limit!</p>
        </div>
      );
    }
  }

  render() {
    let customer = this.props.customer;

    let customerDisplay;
    if (customer) {
      customerDisplay = (
        <ul className="customer-item" key={customer.id}>
          <li><h3>{customer.name}</h3></li>
          <li>Monthly Api Limit: <b>{customer.monthly_api_limit}</b></li>
          <li>Overage Unit Cost: {customer.overage_unit_cost}</li>
          <li>Billing Address: {customer.billing_address}</li>
          <li>Billing Email: {customer.billing_email}</li>
          <li>Start Date: {customer.start_date}</li>
        </ul>
      );
    } else {
      customerDisplay = null;
    }

    let billDisplay = this.props.bills.map((bill) => (
      <Link to={`/bills/${bill.id}`} key={bill.id}>
        <ul className="customer-item" >
          <li>Overage Amount: ${bill.overage_amount}</li>
          <li>Time Period: {bill.month}/{bill.year}</li>
          <li>Status: {bill.status}</li>
        </ul>
      </Link>
    ));

    let usageDisplay = this.props.usage.map((usage) => (
      <div className="usage-item" key={usage.id}>
        <ul className="usage-info">
          <li>Time Period: {usage.month}/{usage.year}</li>
          {this.usageDisplay(usage.api_usage)}
        </ul>
        {this.buttonDisplay(usage)}
      </div>
    ));


    return (
      <div className="customer-index-container">
        <h2>Customer</h2>
          {customerDisplay}
        <h2>Bills</h2>
          {billDisplay}
        <h2>Usage</h2>
          {usageDisplay}
      </div>
    );
  }
}

export default CustomerShow;
