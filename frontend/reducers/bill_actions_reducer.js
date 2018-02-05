// import merge from 'lodash/merge';
import { RECEIVE_BILL } from '../actions/bill_actions';

const billActionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BILL:
      return action.payload.bill_actions;
    default:
      return state;
  }
};

export default billActionsReducer;
