import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link as RouterLink
} from 'react-router-dom';
import Link from '@material-ui/core/Link';

import DailyCourses from './components/DailyCourses';
import MonthlyCourses from './components/MonthlyCourses';

function Routes() {
	return (
		<Router>
			<div>
				<nav>
					<Link
						style={{ display: 'inline-block', marginLeft: 10 }}
						component={RouterLink}
						to='/'
					>
						今日课程
					</Link>

					<Link style={{ display: 'inline-block', marginLeft: 10 }} component={RouterLink} to='/monthly'>
						本月课程
					</Link>
				</nav>

				<Route path='/' exact component={DailyCourses} />
				<Route path='/monthly' component={MonthlyCourses} />
			</div>
		</Router>
	);
}

export default Routes;
