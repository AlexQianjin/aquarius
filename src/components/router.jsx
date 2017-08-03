"use strict";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Redirect, Switch } from 'react-router-dom';
import LoginApp from './Login';
import Main from './Main';
import Container from './Container'

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
            <Container>
              <Switch>
              <Route path="/main" component={Main}></Route>
              </Switch>
            </Container>
        </div>
    </Router>
);

export default Routes;