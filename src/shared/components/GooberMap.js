/**
 * Created by chan on 2016. 8. 24..
 */
import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import Config from '../config';

export default class GooberMap extends Component {
  state = {
    center: {
      lat: -25.363882,
      lng: 131.044922,
    },

    //array of objects of markers
    markers: [
    ]
  };

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <GoogleMapLoader
          containerElement={
            <div
              //{...this.props}
              style={{height: '500px', width: '500px'}} >
            </div>
          }

          googleMapElement={
            <GoogleMap
              center={{ lat: -25.363882, lng: 131.044922 }}
              defaultZoom={4}
              ref = 'map' >


            </GoogleMap>
          }
        />
      </div>
    );
  }

}
