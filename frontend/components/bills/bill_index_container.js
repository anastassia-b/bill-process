import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { fetchBills } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  bills: Object.values(state.bills)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBills: () => dispatch(fetchBills()),
});


export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
