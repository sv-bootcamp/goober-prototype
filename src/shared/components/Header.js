import React from 'react';
import { Link } from 'react-router';
import { Search } from '../components';

class Header extends React.Component {
    constructor(props) {
        super(props);
 
        /* IMPLEMENT: CREATE A SEARCH STATUS */
    }
    
	render() {

        const loginButton = (
            <li>
                <Link to="/login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </li>
        );
 
        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}>
                    <i className="material-icons">lock_open</i>
                </a>
            </li>
        );

		return (
			<nav>
                <div className="nav-wrapper blue darken-1">
                    <Link to="/" className="brand-logo center">MEMOPAD</Link>
 
                    <ul>
                        <li><a><i className="material-icons">search</i></a></li>
                    </ul>
 
                    <div className="right">
                        <ul>
                            { this.props.isLoggedIn ? logoutButton : loginButton }
                        </ul>
                    </div>
                </div>
            </nav>
		);
	}
}

Header.propTypes = {
	isLoggedIn: React.PropTypes.bool,
	onLogout: React.PropTypes.func
};

Header.defaultProps = {
	isLoggedIn: false,
	onLogout: () => { console.error('logout function not defined'); }
};

export default Header;