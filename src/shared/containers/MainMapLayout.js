import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';



export default class MainMapLayout extends Component {
  static propTypes = {
    renderMap: PropTypes.func    
  };  

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);    
  }

  render() {    
      const map = (this.props.renderMap);      

      return (        
        <div style={{height: '100%', position: 'relative', overflow: 'hidden'}}>
          <div style={{position: 'absolute', left: 0, top: 0, width: '62%', height: '100%'}}>                                    
              {map}           
          </div>
          <div style={{position: 'absolute', right: 0, top: 0, width: '38%', height: '100%'}}>
          	<h3>card</h3>
            
          </div>
        </div>
      );
        
  }
}
