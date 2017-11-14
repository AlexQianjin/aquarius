import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginApp from './Login';
import Main from './Main';
import Container from './Container';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={LoginApp}></Route>
			<Container>
				<Switch>
					<Route path="/main" component={Main}></Route>
				</Switch>
			</Container>
		</div>
	</Router>
);

export default Routes;
