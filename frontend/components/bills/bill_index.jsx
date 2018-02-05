import React from 'react';
import { Link } from 'react-router-dom';

class BillIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBills();
  }

  render() {

    let billList = this.props.bills.map(bill => (
      <Link to={`/bill/${bill.id}`} key={bill.id}>
        <ul className="customer-item">
          <li><h3>{bill.customer}: ${bill.overage_amount}</h3></li>
          <li>Status: {bill.status}</li>
          <li>Date: {bill.month} / {bill.year}</li>
          <li>Overage Units: {bill.overage_units}</li>
          <li>Overage Unit Cost: {bill.overage_unit_cost}</li>
        </ul>
      </Link>
      )
    );

    return (
      <div className="customer-index-container">
        <h2>Bills</h2>
        {billList}
      </div>
    );
  }
}

export default BillIndex;
