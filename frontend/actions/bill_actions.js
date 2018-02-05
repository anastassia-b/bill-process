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
