import {
	GET_MAP_MARKERS,
	GET_MAP_MARKERS_SUCCESS,
	GET_MAP_MARKERS_FAILURE,
	ADD_MAP_MARKER,
	ADD_MAP_MARKER_SUCCESS,
	ADD_MAP_MARKER_FAILURE,
	REMOVE_MAP_MARKER,
	REMOVE_MAP_MARKER_SUCCESS,
	REMOVE_MAP_MARKER_FAILURE
} from './ActionTypes';
import axios from 'axios';

export function getMapMarkers() {
	return (dispatch) => {
		return axios.get('/api/map/getmarkers')
		.then((response) => {
			dispatch(getMapMarkersSuccess(response));
		}).catch((error) => {
			dispatch(getMapMarkersFailure(error));
		});
	}
}

export function getMapMarkersSuccess(data) {
	return {
		type: GET_MAP_MARKERS_SUCCESS,
		data
	};
}

export function getMapMarkersFailure(error) {
	return {
		type: GET_MAP_MARKERS_FAILURE,
		error
	};
}

export function addMapMarker(position) {	
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