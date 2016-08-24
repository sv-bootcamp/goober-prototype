import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppContainer from '../containers/app-container';
import IndexContainer from '../containers/index-container';
import ExContainer from '../containers/ex-container';
import MapContainer from '../containers/goobermap-container';

export default (
    <Route path="/" component={AppContainer}>
      <IndexRoute component={IndexContainer}/>
      <Route path="ex" component={ExContainer} />
      <Route path="map" component={MapContainer} />
    </Route>
);
