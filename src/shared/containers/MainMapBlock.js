import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import controllable from 'react-controllables';

import GoogleMap from 'google-map-react';
import Marker from './Marker.js';
import {List} from 'immutable';

class MainMapBlock extends Component {
	static propTypes = {
		onCenterChange: PropTypes.func, // @controllable generated fn
	    onZoomChange: PropTypes.func, // @controllable generated fn
	    onBoundsChange: PropTypes.func,
	    onMarkerHover: PropTypes.func,
	    onChildClick: PropTypes.func,
	    center: PropTypes.any,
	    zoom: PropTypes.number,
	    markers: PropTypes.any
	}

	static defaultProps = {
    	center: [37.563398, 126.9907941],
    	zoom: 15,
    	markers: [
	      {id: 'A', lat: 37.563398, lng: 126.9907941},
	      {id: 'B', lat: 37.565398, lng: 126.9907941},
	      {id: 'C', lat: 37.565398, lng: 126.9987941}
	    ]    	
  	}

  	shouldComponentUpdate = shouldPureComponentUpdate;

  	constructor(props) {
    	super(props);
  	}

  	_onBoundsChange = (center, zoom, bounds, marginBounds) => {
  		// if (this.props.onBoundsChange) {
	   //    this.props.onBoundsChange({center, zoom, bounds, marginBounds});
	   //  } else {
	      this.props.onCenterChange(center);
	      this.props.onZoomChange(zoom);
	    // }
  	}

  	_onChildClick = (key, childProps) => {
  		// const markerId = childProps.marker.get('id');
	   //  const index = this.props.markers.findIndex(m => m.get('id') === markerId);
	   //  if (this.props.onChildClick) {
	   //    this.props.onChildClick(index);
	   //  }
	}

	_onChildMouseEnter = (key, childProps) => {
		// const markerId = childProps.marker.get('id');
	 //    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
	 //    if (this.props.onMarkerHover) {
	 //      this.props.onMarkerHover(index);
	 //    }
	}	

	_onChildMouseLeave = (/* key, childProps */) => {
		if (this.props.onMarkerHover) {
	      this.props.onMarkerHover(-1);
	    }
	}

	render() {
		const markers = this.props.markers
			.map(marker => {
				const {id, ...coords} = marker;
				
				return(
					<Marker
					key={id}
					text={id}
					{...coords} />
				);
			});

		return (
			<section style={{ width: '100%', height: '500px' }}>
				<h4>coords: {this.props.center}</h4>
				<GoogleMap
					center={this.props.center}
					zoom={this.props.zoom}
					onBoundsChange={this._onBoundsChange}
					onChildClick={this._onChildClick}
					onChildMouseEnter={this._onChildMouseEnter}
					onChildMouseLeave={this._onChildMouseLeave}
					hoverDistance={20}>
					{markers}
				</GoogleMap>
			</section>
		);
	}

}

MainMapBlock = controllable(MainMapBlock, ['center', 'zoom', 'markers']);

export default MainMapBlock;