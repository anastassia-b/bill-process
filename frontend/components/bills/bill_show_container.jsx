import { connect } from 'react-redux';
import BillShow from './bill_show.jsx';
import { fetchBill, updateBill } from '../../actions/bill_actions';
import { withRouter } from 'react-router';

const selectBill = (state, id) => {
  return state.bills[id];
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.billId;
  return (
    {
      bill: selectBill(state, id),
      billActions: Object.values(state.billActions),
      currentUser: state.session.currentUser
    }
    // usage: Object.values(state.usage) BILL ACTIONS
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchBill: (id) => dispatch(fetchBill(id)),
  updateBill: (bill, action) => dispatch(updateBill(bill, action))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillShow)
);
