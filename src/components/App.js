import React from 'react';
import store from '../stores/store';
import Routes from './Router';

import { Provider } from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				{Routes}
			</Provider>
		);
	}
}

export default App;
