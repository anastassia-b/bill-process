import React from 'react';
import { Link } from 'react-router-dom';

class BillIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderBills = this.renderBills.bind(this);
    this.filterBills = this.filterBills.bind(this);
    this.billDisplay = this.billDisplay.bind(this);
  }

  componentDidMount() {
    // unnecessary since the nav bar is fetching the bills already
    // this.props.fetchBills();
  }

  componentWillReceiveProps(newProps) {
    // later could implement fetching the correct bills from the backend.
    // for now, filtering from all bills.
  }

  renderBills(bills, status) {
    let title = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

    let billList = bills.map(bill => (
        <div className="bill-item" key={bill.id}>
          <Link to={`/bills/${bill.id}`} key={bill.id}>
          <ul>
            <li><h3>{bill.customer}: ${bill.overage_amount}</h3></li>
            <li>Status: {bill.status}</li>
            <li>Time Period: {bill.month} / {bill.year}</li>
          </ul>
          </Link>
        </div>
    ));

    return (
      <div className="bill-index-container">
        <h2>{title} Bills</h2>
        {billList}
      </div>
    );
  }

  filterBills(status) {
    let billStatus = status.toUpperCase();
    let filteredBills = this.props.bills.filter(bill => (
      bill.status === billStatus
    ));
    return this.renderBills(filteredBills, status);
  }

  billDisplay() {
    let status = this.props.status;

    if (status) {
      return (this.filterBills(status));
    } else {
      return (this.renderBills(this.props.bills, 'all'));
    }
  }

  render() {
    return (
      <div className="bill-display-container">
        {this.billDisplay()}
      </div>
    );
  }
}

export default BillIndex;
