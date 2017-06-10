import React from 'react';
import Root from './app';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

render(
    <BrowserRouter>
        <Route path="/" component={Root}></Route>
    </BrowserRouter>,
    document.getElementById('app')
);