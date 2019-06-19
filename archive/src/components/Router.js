import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import PrivateRoute from './PrivateRoute';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={Login}></Route>
			<Switch>
				<PrivateRoute path="/main" component={Main} />
			</Switch>
		</div>
	</Router>
);

export default Routes;
