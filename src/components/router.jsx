"use strict";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Redirect } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import LoginApp from './login';
import Main from './main';

const getLoginStatus = () => {
    let credential = sessionStorage.getItem('login');
    return credential ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getLoginStatus() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const Routes = (
    <Router>
        <div>
            <Route exact path="/" component={LoginApp}></Route>
            <PrivateRoute path="/main" component={Main}></PrivateRoute>
        </div>
    </Router>
);

export default Routes;