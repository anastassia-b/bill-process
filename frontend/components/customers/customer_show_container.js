import { connect } from 'react-redux';
import CustomerShow from './customer_show';
import { fetchCustomer, fetchUsage } from '../../actions/customer_actions';
import { withRouter } from 'react-router';

const selectCustomer = (state, id) => {
  return state.customers[id];
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.customerId;
  return (
    {
      customer: selectCustomer(state, id),
      usage: Object.values(state.usage)
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCustomer: (id) => dispatch(fetchCustomer(id)),
  fetchUsage: (id) => dispatch(fetchUsage(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerShow)
);
