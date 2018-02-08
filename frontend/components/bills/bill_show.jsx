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
    // need to switch based on bill status and also user role.
    if (this.props.bill && this.props.bill.status == 'WRITEOFF') {
      return (
        <div className="bill-buttons-container">
          <div className="bill-buttons">
            <div id="pending">UNDO</div>
          </div>
        </div>
      );
    }

    if (this.props.bill && this.props.bill.status == 'SENT') {
      return (
        <div className="bill-buttons-container">
          <div className="bill-buttons">
            <div id="pending">NO FURTHER ACTION</div>
          </div>
        </div>
      );
    }

    if (this.props.currentUser.role == 'Finance') {
      if (this.props.bill && this.props.bill.status == 'SENT') {
        return (
          <div className="bill-buttons-container">
            <div className="bill-buttons">
              <div id="pending">NO FURTHER ACTION</div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="bill-buttons-container">
            <div className="bill-buttons">
              <div id="pending">PENDING APPROVAL</div>
            </div>
          </div>
        );
      }
    } else {
      if (this.props.bill && this.props.bill.status == 'FINAL') {
        return (
          <div className="bill-buttons-container">
            <div className="bill-buttons">
              <div id="pending">WAITING TO SEND</div>
            </div>
          </div>
        );
      } else {
      return (
        <div className="bill-buttons-container">
          <div className="bill-buttons">
            <button
              onClick={() => this.props.updateBill(this.props.bill, 'reject')}
              id="reject">REJECT</button>
            <button
              onClick={() => this.props.updateBill(this.props.bill, 'approve')}
              id="approve">APPROVE</button>
          </div>
        </div>
      );
    }
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
