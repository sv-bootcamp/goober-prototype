import authentication from './authentication';
import memo from './memo';
import map from './map';

import { combineReducers } from 'redux';

export default combineReducers({
	authentication,
	memo,
	map
});