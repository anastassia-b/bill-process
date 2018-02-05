import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import customerReducer from './customer_reducer';
import usageReducer from './usage_reducer';
import billReducer from './bill_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  customers: customerReducer,
  usage: usageReducer,
  bills: billReducer
});

export default rootReducer;
