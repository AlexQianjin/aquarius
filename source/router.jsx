"use strict";

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './app';

const Routes = (
    <BrowserRouter>
        <Route path="/" component={Root}></Route>
    </BrowserRouter>
);

module.exports = Routes;