import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import customerReducer from './customer_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  customers: customerReducer
});

export default rootReducer;
