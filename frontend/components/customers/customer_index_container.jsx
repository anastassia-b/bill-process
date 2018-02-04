import { connect } from 'react-redux';
import CustomerIndex from './customer_index';
import { fetchCustomers, fetchCustomer } from '../../actions/customer_actions';

const mapStateToProps = (state) => ({
  customers: Object.values(state.customers)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  fetchCustomer: (id) => dispatch(fetchCustomer(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerIndex);
