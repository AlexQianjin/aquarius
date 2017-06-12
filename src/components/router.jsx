"use strict";

import React from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import LoginApp from './login';
import Main from './main';

const Routes = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginApp}></Route>
            <Route path="/main" component={Main}></Route>
        </div>
    </BrowserRouter>
);

export default Routes;