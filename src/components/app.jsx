import React, { Component } from 'react';
import { render } from 'react-dom';
import store from '../stores/store';
import Routes from './Router';

import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {Routes}
            </Provider>
        )
    }
}

export default App;