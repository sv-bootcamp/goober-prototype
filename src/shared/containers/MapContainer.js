import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MainMapLayout from './MainMapLayout.js';
import Map from './Map.js';

import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';
import { addMapMarker } from '../actions/map';

class MapContainer extends Component {
	static propTypes = {
		layout: PropTypes.string
	}

	shouldComponentUpdate = shouldPureComponentUpdate;

	constructor(props) {
		super(props);
	}

	_renderMap() {
		return (
			<Connector select={state => ({
				center: state.map.get('mapInfo').get('center'),
				zoom: state.map.get('mapInfo').get('zoom'),
				markers: state.map.get('dataFiltered')
			})}>
			{{{dispatch, ...mapProps}} => (<Map {...mapProps} {...bindActionCreators(mapActions, dispatch)} />)}
			</Connector>
		);
	}

	render() {
		return {
			<MainMapLayout layout={thi.props.layout} renderMap={this._renderMap} />
		};
	}
}

export default MapContainer;