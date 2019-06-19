import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../stores/store';
import Routes from './Router';

import { Provider } from 'react-redux';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					{Routes}
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default App;
