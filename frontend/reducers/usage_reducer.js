import merge from 'lodash/merge';
import { RECEIVE_CUSTOMER } from '../actions/customer_actions';

const nullState = {};

const usageReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CUSTOMER:
      if (action.payload.usage) {
        return action.payload.usage;
      } else {
        return nullState;
      }
    default:
      return state;
  }
};

export default usageReducer;
