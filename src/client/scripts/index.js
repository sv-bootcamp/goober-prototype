import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Home, Login, Register, Map, MapContainer } from '../../shared/containers';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../shared/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="home" component={Home}/>
				<Route path="login" component={Login}/>
				<Route path="register" component={Register}/>				
				<Route path="map" component={Map}/>				
				<Route path="maptest" component={MapContainer}/>
			</Route>
		</Router>
	</Provider>
	, rootElement);