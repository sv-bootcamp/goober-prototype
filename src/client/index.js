import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from '../shared/reducers';
import App from '../shared/components/App';
import thunk from 'redux-thunk';

const store = createStore(
	allReducers,
	applyMiddleware(
		thunk
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);