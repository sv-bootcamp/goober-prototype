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
		          defaultZoom={15}
		          defaultCenter={{ lat: 37.563398, lng: 126.9907941 }}		          
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
	markers: React.PropTypes.array,
	onMapClick: React.PropTypes.func,
	onMarkerRightclick: React.PropTypes.func
};

SimpleMap.defaultProps = {	
	markers: [],
	onMapClick: (event) => {
        console.error('mapClick not defined');
    },
    onMarkerRightclick: (index, event) => {
        console.error('markerRightClick not defined');
    }
}


export default SimpleMap;