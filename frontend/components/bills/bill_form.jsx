import React from 'react';

class BillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_id: '1',
      month: '1',
      year: '2017',
      overage_units: '10000',
      overage_unit_cost: '0.1',
      overage_amount: '1000',
      comment: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
      this.setState(
        {overage_amount: (this.state.overage_units * this.state.overage_unit_cost)}
      );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBill(this.state).then(() => (
      this.props.history.push('/dashboard')
    ));

    this.setState({
      customer_id: '',
      month: '1',
      year: '2017',
      overage_units: '10000',
      overage_unit_cost: '0.1',
      overage_amount: '1000'
    });
  }

  render() {
    let customers = this.props.customers;
    //will pull the selected customer from data, to get the correct amounts.

    return (
      <div className="bill-form-container">
        <h2>Create Bill</h2>
        <form className="bill-form" onSubmit={this.handleSubmit}>
          <label>Customer Id</label>
          <input type="text"
            placeholder="1"
            value={this.state.customer_id}
            onChange={this.update('customer_id')} />

          <label>Month</label>
            <select value={this.state.month} onChange={this.update('month')}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

          <label>Year</label>
          <select value={this.state.year} onChange={this.update('year')}>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
          </select>

          <label>Overage Units</label>
          <input type="text"
            placeholder="10000"
            value={this.state.overage_units}
            onChange={this.update('overage_units')} />

          <label>Overage Unit Cost</label>
          <input type="text"
            placeholder="0.1"
            value={this.state.overage_unit_cost}
            onChange={this.update('overage_unit_cost')} />

          <label>Comment</label>
          <input type="text"
            value={this.state.comment}
            onChange={this.update('comment')} />

          <label id="amount">
            <h4>Overage Amount: </h4>
            <div>${this.state.overage_amount}</div>
          </label>

          <button>Create Draft Bill</button>
        </form>
      </div>
    );
  }
}

export default BillForm;
