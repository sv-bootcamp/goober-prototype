'use strict';
import UserModel from '../models/user';

const User = new UserModel;

class userController{

	constructor(){}
	
	getAll(req,res,next){

		User.get((data) => res.send({userList : data}));

	}

	getById(req,res,next){

		console.log(req.params);

		User.getById(req.params.id,(data) => res.send({user : user}));

	}

}

export default userController;