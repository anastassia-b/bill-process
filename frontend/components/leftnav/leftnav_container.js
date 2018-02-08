import { connect } from 'react-redux';
import LeftNav from './leftnav';
import { fetchCustomers } from '../../actions/customer_actions';
import { fetchBills } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  bills: Object.values(state.bills),
  customers: Object.values(state.customers),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchBills: () => dispatch(fetchBills()),
  fetchCustomers: () => dispatch(fetchCustomers())
});


export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
