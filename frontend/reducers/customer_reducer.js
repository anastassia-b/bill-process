import merge from 'lodash/merge';
import { RECEIVE_CUSTOMERS, RECEIVE_CUSTOMER } from '../actions/customer_actions';

const customerReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CUSTOMERS:
      return action.customers;
    case RECEIVE_CUSTOMER:
      const newCustomer = {[action.customer.id]: action.customer};
      return merge({}, state, newCustomer);
    default:
      return state;
  }
};

export default customerReducer;
