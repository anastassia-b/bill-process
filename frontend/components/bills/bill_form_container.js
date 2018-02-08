import { connect } from 'react-redux';
import BillForm from './bill_form';
import { createBill } from '../../actions/bill_actions';

const mapStateToProps = (state) => ({
  customers: Object.values(state.customers)
});

const mapDispatchToProps = (dispatch) => ({
  createBill: (bill) => dispatch(createBill(bill)),
});


export default connect(mapStateToProps, mapDispatchToProps)(BillForm);
