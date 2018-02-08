import * as APIUtil from '../util/api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';

export const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
});

export const receiveBill = payload => ({
  type: RECEIVE_BILL,
  payload
});

export const fetchBills = () => dispatch => (
  APIUtil.fetchBills().then(bills => (
    dispatch(receiveBills(bills))
  ))
);

export const fetchBill = (id) => dispatch => (
  APIUtil.fetchBill(id).then(bill => (
    dispatch(receiveBill(bill))
  ))
);

export const createBill = (bill) => dispatch => (
  APIUtil.createBill(bill).then(draftBill => (
    dispatch(receiveBill(draftBill))
  ))
);

export const updateBill = (bill, action) => dispatch => (
  APIUtil.updateBill(bill, action).then(actionBill => (
    dispatch(receiveBill(actionBill))
  ))
);

// TODO: Need to implement error handling for creating a new bill
