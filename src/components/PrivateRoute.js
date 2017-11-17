import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const getLoginStatus = () => {
	let credential = sessionStorage.getItem('login');
	return credential.length === 0;
};

const PrivateRoute = ({ Component, ...rest }) => (
	<Route {...rest} render={props => (
		getLoginStatus() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
	)} />
);

export default PrivateRoute;