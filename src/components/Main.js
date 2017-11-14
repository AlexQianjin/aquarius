import React from 'react';

export default class Main extends React.Component {
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
				<Button onClick={this.handleLogOut}>Log out</Button>
			</div>
		);
	}
}
