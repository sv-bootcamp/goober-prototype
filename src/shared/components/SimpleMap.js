import React, { PropTypes } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class SimpleMap extends React.Component {
 	 
 	constructor(props) {
		super(props);

	}

 	render(){ 		
 		const mp = withGoogleMap(props => (

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
			              onRightclick={() => this.props.onMarkerRightclick(index)}/>
		          	)
 				})}
		        </GoogleMap>
 			))	  		    

 		return (	 		
 			{mp}
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