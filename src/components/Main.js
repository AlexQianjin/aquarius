import React from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut = function(e) {
		sessionStorage.removeItem('login');
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

export default withRouter(Main);
