import {combineReducers} from 'redux';
import userReducer from './user';
import exReducer from './ex';
import mapReducer from './goobermap';

export default combineReducers({
  user: userReducer,
  ex: exReducer,
  map: mapReducer
});
