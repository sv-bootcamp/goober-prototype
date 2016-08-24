/**
 * Created by chan on 2016. 8. 24..
 */
import {connect} from 'react-redux';
import GooberMap from '../components/GooberMap';
import getMarker from '../actions/get-marker';

const mapDispatchToProps = {
  onLoadMarker: getMarker
};

function mapStateRoProps(state) {
  return {
    markers: state.markers
  };
}

export default connect(mapStateRoProps, mapDispatchToProps)(GooberMap);
