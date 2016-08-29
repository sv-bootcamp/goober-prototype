import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { getMapMarkers } from '../actions/map';
import MainMapBlock from './MainMapBlock.js';


class MapContainer extends Component {
	static propTypes = {
		layout: PropTypes.string
	}

	shouldComponentUpdate = shouldPureComponentUpdate;

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.props.getMapMarkers().then(
			() => {
				console.log("dd:"+this.props.status + "/"+this.props.markers);

			}
		);
	}
	

	render() {
		return (
			<section>
				<h2>test</h2>
				<MainMapBlock markers={this.props.markers} />				
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		status: state.map.get.status,
		markers: state.map.get.markers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getMapMarkers: () => {
			return dispatch(getMapMarkers());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);