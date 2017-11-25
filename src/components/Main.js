import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { logout } from '../actions/login';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut = function(e) {
		sessionStorage.removeItem('login');
		const { dispatch } = this.props;
		dispatch(logout({}));
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<h3>This is the main page!</h3>
				<RaisedButton label='Log out' onClick={this.handleLogOut} />
			</div>
		);
	}
}

export default connect()(withRouter(Main));
