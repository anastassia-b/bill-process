import * as APIUtil from '../util/api_util';

export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';
export const RECEIVE_USAGE = 'RECEIVE_USAGE';

export const receiveCustomers = customers => ({
  type: RECEIVE_CUSTOMERS,
  customers
});

export const receiveCustomer = payload => ({
  type: RECEIVE_CUSTOMER,
  payload
});
//
// export const receiveUsage = usage => ({
//   type: RECEIVE_USAGE,
//   usage
// });

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

// export const fetchUsage = (id) => dispatch => (
//   APIUtil.fetchUsage(id).then(usage => (
//     dispatch(receiveUsage(id, usage))
//   ))
// );
