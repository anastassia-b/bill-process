import merge from 'lodash/merge';
import { RECEIVE_CUSTOMER } from '../actions/customer_actions';

const usageReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CUSTOMER:
      return action.payload.usage;
    default:
      return state;
  }
};

export default usageReducer;
