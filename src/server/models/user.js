'use strict';

let instance = null;

class userModel {
	
	constructor (){
		if(!instance) {
			instance = this;
			this.userList = [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    	];
		}

		return instance;
	}

	add (user, finalcallback) {

		this.userList;

		return finalcallback(userDB[user.userId]);

	}

	get (finalcallback) {

		return finalcallback(this.userList);

	}

}

export default userModel;