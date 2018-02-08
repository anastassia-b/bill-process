import { connect } from 'react-redux';
import BillIndex from './bill_index';
import { fetchBills } from '../../actions/bill_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  bills: Object.values(state.bills),
  status: ownProps.match.params.status
});

const mapDispatchToProps = (dispatch) => ({
  fetchBills: () => dispatch(fetchBills()),
});


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BillIndex)
);
