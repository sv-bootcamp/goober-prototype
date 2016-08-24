import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
	add: {
		status: 'INIT',
		error: -1
	},
	remove: {
		status: 'INIT',
		error: -1
	}
};

export default function map(state, action) {
	if(typeof state === "undefined") {
		state = initialState;
	}

	switch(action.type) {
		case types.ADD_MAP_MARKERS:
			return update(state, {

			});
		case types.REMOVE_MAP_MARKER:
			return update(state, {

			});
		default:
			return state;			
	}
}