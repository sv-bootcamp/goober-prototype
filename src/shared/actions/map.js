import {
	ADD_MAP_MARKER,
	ADD_MAP_MARKER_SUCCESS,
	ADD_MAP_MARKER_FAILURE,
	REMOVE_MAP_MARKER,
	REMOVE_MAP_MARKER_SUCCESS,
	REMOVE_MAP_MARKER_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function addMapMarker(position) {
	console.log("pos:"+position);

	return (dispatch) => {
		dispatch({
			type: ADD_MAP_MARKER,
			position: position
		});
	}
}

export function addMapMarkerSuccess() {
	return {
		type: ADD_MAP_MARKER_SUCCESS
	};
}

export function addMapMarkerFailure(error) {
	return {
		type: ADD_MAP_MARKER_FAILURE,
		error
	};
}

export function removeMapMarker(marker) {
	return (dispatch) => {
		dispatch({
			type: REMOVE_MAP_MARKER
		});
	};
}