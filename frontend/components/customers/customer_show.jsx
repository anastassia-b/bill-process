import React from 'react';

class CustomerShow extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    console.log(this.props);
    let customer = this.props.customer;

    let customerDisplay;
    if (customer) {
      customerDisplay = (
        <ul className="customer-item" key={customer.id}>
          <li><h3>{customer.name}</h3></li>
          <li>Billing Address: {customer.billing_address}</li>
          <li>Billing Email: {customer.billing_email}</li>
          <li>Monthly Api Limit: {customer.monthly_api_limit}</li>
          <li>Overage Unit Cost: {customer.overage_unit_cost}</li>
          <li>Start Date: {customer.start_date}</li>
          <li>End Date: {customer.end_date}</li>
          <li>Require CMS Approval: {customer.require_csm_approval}</li>
        </ul>
      );
    } else {
      customerDisplay = null;
    }

    let usageDisplay = this.props.usage.map((usage) => (
      <ul className="customer-item" key={usage.id}>
        <li>Time Period: {usage.month}/{usage.year}</li>
        <li>Api Usage: {usage.api_usage}</li>
      </ul>
    ));


    return (
      <div className="customer-index-container">
        <h2>Customer</h2>
          {customerDisplay}
        <h2>Usage</h2>
          {usageDisplay}
      </div>
    );
  }
}

export default CustomerShow;
