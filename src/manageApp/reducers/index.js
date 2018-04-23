import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// All the reducers (functions) in here attached to the part of the state
// they produce
export default combineReducers({
  auth: AuthReducer
});
