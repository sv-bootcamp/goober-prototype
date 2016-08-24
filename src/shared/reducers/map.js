import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
	add: {
		status: 'INIT',
		markers: [],
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

	let position = action.position;
	switch(action.type) {
		case types.ADD_MAP_MARKER:			
			return update(state, {
					add: {
						status: { $set: 'SUCCESS'},
						markers: { $push: [
					        {
					          position: position,
					          defaultAnimation: 2,
					          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
					        }
					    ]}
					}						
			});
		case types.REMOVE_MAP_MARKER:
			return update(state, {
				remove: {
					status: { $set: 'SUCCESS'}
				}
			});
		default:
			return state;			
	}
}