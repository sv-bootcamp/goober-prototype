import React from 'react';
import { connect } from 'react-redux';

// import update from "react-addons-update";
import SimpleMap from "../components/SimpleMap";
import { addMapMarker } from '../actions/map';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.handleMapClick = this.handleMapClick.bind(this);
  		this.handleMarkerRightclick = this.handleMarkerRightclick.bind(this);

  		// this.state = {
		  //   markers: [{
		  //     position: {
		  //       lat: 25.0112183,
		  //       lng: 121.52067570000001,
		  //     },
		  //     key: `Taiwan`,
		  //     defaultAnimation: 2,
		  //   }]
		  // };
  	}  

  componentDidMount() {
    // setTimeout(() => {
    //   let { markers } = this.state;
    //   markers = update(markers, {
    //     $push: [
    //       {
    //         position: {
    //           lat: 25.99,
    //           lng: 122.9,
    //         },
    //         defaultAnimation: 2,
    //         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
    //       },
    //     ],
    //   });
    //   this.setState({ markers });
    // }, 2000);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
  	console.log("t:"+event.latLng);

  	let position = event.latLng;
  	return this.props.addMapMarker(position).then(
  		() => {
  			Materialize.toast('success',  2000);
  		}
  	);

    
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    return (
      <SimpleMap
      	containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        markers={this.props.markers}
        onMapClick={this.handleMapClick}
        onMarkerRightclick={this.handleMarkerRightclick}/>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		markers: state.markers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMapMarker: (position) => {
			return dispatch(addMapMarker(position));
		},
		removeMarker: (contents) => {
			///
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);