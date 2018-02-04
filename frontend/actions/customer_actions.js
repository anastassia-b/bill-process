import * as APIUtil from '../util/api_util';

export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';

export const receiveCustomers = customers => ({
  type: RECEIVE_CUSTOMERS,
  customers
});

export const receiveCustomer = customer => ({
  type: RECEIVE_CUSTOMER,
  customer
});

export const fetchCustomers = () => dispatch => (
  APIUtil.fetchCustomers().then(customers => (
    dispatch(receiveCustomers(customers))
  ))
);

export const fetchCustomer = (id) => dispatch => (
  APIUtil.fetchCustomer(id).then(customer => (
    dispatch(receiveCustomer(customer))
  ))
);
