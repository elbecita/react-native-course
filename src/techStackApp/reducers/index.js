import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// All the reducers (functions) in here attached to the part of the state
// they produce
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibrary: SelectionReducer
});
