import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_styles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;
  
  constructor(props) {
    super(props);
  }

  render() {
     const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div className="hint hint--html hint--info hint--top" style={style}>
          <div>{this.props.text}</div>
          <div style={{width: 80}} className="hint__content">
          Сlick me
          </div>
       </div>
    );
  }
}