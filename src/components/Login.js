import React from 'react';
import ReactDOM from 'react-dom';
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
		let storedSessionLogin = sessionStorage.getItem('login');
		if (storedSessionLogin) {
			this.props.history.push('/main');
		}
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this.usernameInput).focus();
		// this.usernameInput.focus();
	}

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
		console.log(`${this.username}---${this.password}`);

		dispatch(login({username: this.username, password: this.password}, () => { console.log('login----login'); this.props.history.push('/main'); }));
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
				<TextField id='username' value={this.username} onChange={this.handleUsernameChange}/>
			</div>
			<div>
				<TextField id='password' value={this.password} onChange={this.handlePasswordChange}/>
			</div>
			<div>{message}</div>
			<RaisedButton type="submit" label='Login' primary={true}/>
		</form>);
	}

	render() {
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
};

function mapStateToProps(state) {
	const { message, userData, isFetching, posts, error } = state.user;

	return { message, userData, isFetching, posts, error };
}

export default connect(mapStateToProps)(Login);
