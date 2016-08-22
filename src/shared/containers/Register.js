import React from 'react';
import { Authentication } from '../components';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/authentication';
import { browserHistory } from 'react-router';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleRegister(id, pw) {
		return this.props.registerRequest(id, pw).then(
			() => {
				if(this.props.status === "SUCCESS") {
					Materialize.toast('Success! please log in', 2000);
					browserHistory.push('/login');
					return true;
				} else {
					let errorMessage = [
						'invlide username',
						'password is too short',
						'username already exists'
					];

					let $toastContent = $('<span>'+errorMessage[this.props.error -1]+'</span>');
					Materialize.toast($toastContent, 2000);
					return false;
				}
			}
		);
	}

	render() {
		return (
			<div>
				<Authentication mode={false}
					onRegister={this.handleRegister}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		status: state.authentication.register.status,
		errorCode: state.authentication.register.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		registerRequest: (id, pw) => {
			return dispatch(registerRequest(id, pw));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);