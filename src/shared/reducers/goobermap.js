/**
 * Created by chan on 2016. 8. 24..
 */
import reduceReducers from 'reduce-reducers';

const defaultState = {
  markers: [
    {
      position: {
        lat: -25.363882,
        lng: 131.044922,
      },
      showInfo: false
    },
    {
      position: {
        lat: -25.363882,
        lng: 131.044922,
      },
      showInfo: false
    }
  ]
};

export default reduceReducers( (state = defaultState, action) => {
    switch(action.type) {
      case 'GET_MARKERS':
        return state;
      default:
        return state;
    }
    return state;
  }
);

/*
 [
 {
 position: new google.maps.LatLng(-27.363882, 137.044922),
 showInfo: false
 },
 {
 position: new google.maps.LatLng(-23.363882, 129.044922),
 showInfo: false
 }
 ]
 */
