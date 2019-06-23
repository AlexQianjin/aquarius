import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';

function MonthlyCourses() {
	return <h2>MonthlyCourses</h2>;
}

function AppRouter() {
	return (
		<Router>
			<div>
				{/* <nav>
					<ul>
						<li>
							<Link to='/'>Daily Courses</Link>
						</li>
						<li>
							<Link to='/monthly/'>Monthly Courses</Link>
						</li>
					</ul>
				</nav> */}

				<Route path='/' exact component={App} />
				<Route path='/monthly/' component={MonthlyCourses} />
			</div>
		</Router>
	);
}

export default AppRouter;
