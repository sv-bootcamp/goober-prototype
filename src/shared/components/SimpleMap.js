import React, { PropTypes } from "react";
import {
  GoogleMapLoader,
  GoogleMap,
  Marker
} from "react-google-maps";


class SimpleMap extends React.Component {
 	 
 	constructor(props) {
		super(props);

	}

 	render(){ 		
 		return (
	 		<section style={{ height: '300px' }}>
		  	<h2>Test2</h2>
		    <GoogleMapLoader
		      containerElement={
		        <div
		          // {...this.props}
		          style={{
		            height: '300px',
		            width: '100%'
		          }}
		        />
		      }
		      googleMapElement={
		        <GoogleMap
		          ref={(map) => console.log(map)}
		          defaultZoom={3}
		          defaultCenter={{ lat: -25.363882, lng: 131.044922 }}		          
		          onClick={this.props.onMapClick}
		        >
		          {this.props.markers.map((marker, index) => {
					return(		          
		            <Marker
		              {...marker}
		              onRightclick={() => this.props.onMarkerRightclick(index)}
		            />
		          	)
 				})}
		        </GoogleMap>
		      }
		    />
		  </section>
	  );
	}
}

SimpleMap.propTypes = {
	coordinates: React.PropTypes.object,
	markers: React.PropTypes.array,
	onMapClick: React.PropTypes.func,
	onMarkerRightclick: React.PropTypes.func
};

SimpleMap.defaultProps = {
	coordinates: {
		lat: -25.363882, lng: 131.044922
	},
	markers: [],
	onMapClick: (id, index) => {
        console.error('mapClick not defined');
    },
    onMarkerRightclick: (id, index) => {
        console.error('markerRightClick not defined');
    }
}


export default SimpleMap;