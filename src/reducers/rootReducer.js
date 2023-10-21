// reducers.js
import { combineReducers } from 'redux';

// Define your individual reducers here
const reducer1 = (state = {}, action) => {
  // Handle actions here
  return state;
};

const reducer2 = (state = {}, action) => {
  // Handle actions here
  return state;
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  slice1: reducer1,
  slice2: reducer2,
  // Add more slices as needed
});

export default rootReducer;
