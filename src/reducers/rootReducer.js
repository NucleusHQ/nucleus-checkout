// reducers.js
import { combineReducers } from 'redux';
import { UPDATE_PROGRAM_DATA } from '../constants';


const initialState = {}

const programDataReducer = (state = initialState, action) => {
  const {type, payload} = action || {};

  if(type == UPDATE_PROGRAM_DATA) {
    return {...state, ...payload}
  } else {
    return state;
  }
};

const reducer2 = (state = {}, action) => {
  return state;
};

const rootReducer = combineReducers({
  programData: programDataReducer
});

export default rootReducer;
