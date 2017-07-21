import React, { Component } from 'react';
import { render } from 'react-dom';
import store from '../stores/store';
import Login from './login';
import Main from './main';
import Routes from './router';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import DevTools from './devtools';

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