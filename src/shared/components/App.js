import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';

const App = () => (
	<div>
		<h1>User List</h1>
		<UserList />
		<h1>User detail</h1>
		<UserDetails />
	</div>
);

export default App;