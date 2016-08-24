/**
 * Created by chan on 2016. 8. 23..
 */
import {connect} from 'react-redux';
import Ex from '../components/ex';

const mapDispatchToProps = {

};

function mapStateToProps(state) {
  return {
    num: state.num
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ex);
