"use strict";

import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import LoginApp from './login';
import Main from './main';

const Routes = (
    <Router>
        <div>
            <Route exact path="/" component={LoginApp}></Route>
            <Route path="/main" component={Main}></Route>
        </div>
    </Router>
);

export default Routes;