import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { login } from '../actions/login';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	componentWillMount() {
		// let storedSessionLogin = sessionStorage.getItem('login');
		// if (storedSessionLogin) {
		// 	console.log(storedSessionLogin);
		// 	this.props.history.push('/main');
		// }
	}

	componentDidMount() {
		// this.usernameInput.focus();
	}

	focusUsernameInputTextField = input => {
		if (input) {
			setTimeout(() => input.focus(), 100);
		}
	};

	handleUsernameChange = e => {
		this.setState({
			username: e.target.value
		});
	};

	handlePasswordChange = e => {
		this.setState({
			password: e.target.value
		});
	};

	handleLogin = e => {
		e.preventDefault();
		const { dispatch } = this.props;

		dispatch(login({username: this.state.username, password: this.state.password}));
	};

	renderWelcomeMessage() {
		const { isFetching } = this.props;

		let response = isFetching ? <h2>Loading...</h2> : '';

		return (<div>{response}</div>);
	}

	renderInput() {
		const { message } = this.props;

		return (<form onSubmit={this.handleLogin}>
			<div>
				<TextField id="username" value={this.username} onChange={this.handleUsernameChange} ref={this.focusUsernameInputTextField}/>
			</div>
			<div>
				<TextField id="password" value={this.password} onChange={this.handlePasswordChange} type="password"/>
			</div>
			<div>{message}</div>
			<RaisedButton type="submit" label="Login" primary={true}/>
		</form>);
	}

	render() {
		const { loggedIn } = this.props;
		const from = { pathname: '/main' };
		if (loggedIn) {
			console.log('xxx');
			return <Redirect to={from}/>;
		}

		return (
			<Paper zDepth={1} style={{height: 400, width: 400}}>
				<h3> Please log in </h3>
				<div>
					{this.renderInput()}
				</div>
				<div>
					{this.renderWelcomeMessage()}
				</div>
			</Paper>
		);
	}
}

function mapStateToProps(state) {
	const { message, userData, isFetching, posts, loggedIn, error } = state.user;

	return { message, userData, isFetching, posts, loggedIn, error };
}

export default connect(mapStateToProps)(Login);
