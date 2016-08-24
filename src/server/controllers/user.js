'use strict';
import UserModel from '../models/user';

const User = new UserModel;

class userController{

	constructor(){}
	
	getAll(req,res,next){

		User.get((data) => res.send({userList : data}));

	}

	getById(req,res,next){

		User.getById(req.params.id,(data) => res.send({user : data}));

	}

}

export default userController;