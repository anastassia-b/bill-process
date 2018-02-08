import React from 'react';

class BillShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.billId;
    this.props.fetchBill(id);
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.billId;

    if (this.props.match.params.billId !== id) {
      this.props.fetchBill(id);
    }
  }

  renderButtons() {
    // need better validations here with more time.

    if (this.props.currentUser.role == 'Finance') {
      return (
        <div className="bill-buttons-container">
          <div id="pending">PENDING APPROVAL</div>
        </div>
      );
    } else {
      return (
        <div className="bill-buttons-container">
          <button id="approve">APPROVE</button>
          <button id="reject">REJECT</button>
        </div>
      );
    }
  }

  render() {
    let bill = this.props.bill;
    let billActions = this.props.billActions;

    let billDisplay;
    if (bill) {
      billDisplay = (
        <ul className="customer-item">
          <li><h3>{bill.customer}: ${bill.overage_amount}</h3></li>
          <li>Status: {bill.status}</li>
          <li>Time Period: {bill.month} / {bill.year}</li>
          <li>Overage Units: {bill.overage_units}</li>
          <li>Overage Unit Cost: {bill.overage_unit_cost}</li>
        </ul>
      );
    } else {
      billDisplay = null;
    }

    let actionsDisplay;
    if (billActions) {
      actionsDisplay = billActions.map(action => (
        <ul className="bill-action-item" key={action.id}>
          <li>Action: {action.action}</li>
          <li>Performed by: {action.stakeholder_name} at {action.created_at}</li>
          <li>Comment: {action.comment}</li>
        </ul>
      ));
    } else {
      actionsDisplay = null;
    }

    return (
      <div className="bill-show-container">
        <h2>Bill</h2>
          {billDisplay}
        <h2>History</h2>
          {actionsDisplay}
        {this.renderButtons()}
      </div>
    );
  }
}

export default BillShow;
