import { connect } from 'react-redux';
import CustomerShow from './customer_show';
import { fetchCustomer } from '../../actions/customer_actions';
import { withRouter } from 'react-router';

const selectCustomer = (state, id) => {
  return state.customers[id];
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.customerId;
  // TODO: also fetch a customer's bills to display
  // (need to refactor later instead of fetching all bills in left nav)
  return (
    {
      customer: selectCustomer(state, id),
      usage: Object.values(state.usage),
      bills: Object.values(state.bills),
      currentUser: state.session.currentUser
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCustomer: (id) => dispatch(fetchCustomer(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerShow)
);

// don't need
// fetchUsage: (id) => dispatch(fetchUsage(id))
