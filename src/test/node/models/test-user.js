'use strict'

import test from 'tape';
import user from './../../../server/models/user';

const userModel = new user();

test('Should add a user', (t) => {

	userModel.add({
		id : 1,
		name : 'patrick',
	},(result) =>{
		t.equal(result.id, 1, "A user is not added");	
	});

	

});
