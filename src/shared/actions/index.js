import Http from '../utils/http-utils';

const HttpUtil = new Http();

export const selectUser = (user) => {

    console.log("You clicked on user: ", user.first);

   	return (dispatch) => {

	    HttpUtil.getData('/api/user/'+user.id.toString(), null, (error, data)=>{

	    	if(error) {
	    		console.log(error);
	    		return;
	    	}

	    	dispatch({
	    		type: 'USER_SELECTED',
	    		payload: data.user,
	    	});

	    });

   	};
};

export const getUserList = () => {
	console.log('get user List action');

	return (dispatch) => {

		HttpUtil.getData('/api/user', null, (error, data)=>{
			
			if(error) {
				console.log(error);
				return;
			}
			
			dispatch({
				type: 'USER_GET_LIST',
				payload: data.userList,
			});

		});
	};
};