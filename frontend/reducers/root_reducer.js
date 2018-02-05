import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import customerReducer from './customer_reducer';
import usageReducer from './usage_reducer';
import billReducer from './bill_reducer';
import billActionsReducer from './bill_actions_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  customers: customerReducer,
  usage: usageReducer,
  bills: billReducer,
  billActions: billActionsReducer
});

export default rootReducer;
