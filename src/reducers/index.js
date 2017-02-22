import {combineReducers} from 'redux';
import courses from './courseReducer';

// ES6 short hand property name
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
