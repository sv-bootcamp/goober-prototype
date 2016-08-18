'use strict';

let userDB = {};
let instance = null;

class userModel {
	
	constructor (){
		if(!instance) {
			instance = this;
			this.users = {};
		}

		return instance;
	}

	add (user, finalcallback) {

		userDB[user.userId] = user;

		return finalcallback(userDB[user.userId]);

	}

}

export default userModel;