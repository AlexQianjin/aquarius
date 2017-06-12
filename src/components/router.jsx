"use strict";

import React from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import Root from './app';
import Main from './main';

const Routes = (
    <BrowserRouter>
        <Route path="/" component={Root}>
            <IndexRoute></IndexRoute>
        </Route>
    </BrowserRouter>
);

module.exports = Routes;