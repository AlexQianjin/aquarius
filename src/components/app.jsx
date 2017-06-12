import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { render, findDOMNode } from 'react-dom';
import store from '../stores/store';
import { login, setLoginDetails } from '../actions/login';
import Login from './login';
import Main from './main';
import Routes from './router';

import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

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