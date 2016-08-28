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
    	center: new List([59.744465, 30.042834]),
    	zoom: 10    	
  	}

  	shouldComponentUpdate = shouldPureComponentUpdate;

  	constructor(props) {
    	super(props);
  	}

  	_onBoundsChange = (center, zoom, bounds, marginBounds) => {
  		if (this.props.onBoundsChange) {
	      this.props.onBoundsChange({center, zoom, bounds, marginBounds});
	    } else {
	      this.props.onCenterChange(center);
	      this.props.onZoomChange(zoom);
	    }
  	}

  	_onChildClick = (key, childProps) => {
  		const markerId = childProps.marker.get('id');
	    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
	    if (this.props.onChildClick) {
	      this.props.onChildClick(index);
	    }
	}

	_onChildMouseEnter = (key, childProps) => {
		const markerId = childProps.marker.get('id');
	    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
	    if (this.props.onMarkerHover) {
	      this.props.onMarkerHover(index);
	    }
	}	

	_onChildMouseLeave = (/* key, childProps */) => {
		if (this.props.onMarkerHover) {
	      this.props.onMarkerHover(-1);
	    }
	}

	render() {
		const Markers = this.props.markers
			.map((marker, index) => (
				<Marker
					key={marker.get('id')}
					lat={marker.get('lat')}
					lng={marker.get('lng')}
					marker={marker} />
			));

		return (
			<GoogleMap
				center={this.props.center.toJS()}
				zoom={this.props.zoom}
				onBoundsChange={this._onBoundsChange}
				onChildClick={this._onChildClick}
				onChildMouseEnter={this._onChildMouseEnter}
				onChildMouseLeave={this._onChildMouseLeave}
				hoverDistance={20}>
				{Markers}
			</GoogleMap>
		);
	}

}