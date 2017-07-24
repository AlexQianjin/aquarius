"use strict";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Redirect } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import LoginApp from './login';
import Main from './main';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     getState().user.loggedIn ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// );

const Routes = (
    <Router>
        <div>
            <Route exact path="/" component={LoginApp}></Route>
            <Route path="/main" component={Main}></Route>
        </div>
    </Router>
);

export default Routes;