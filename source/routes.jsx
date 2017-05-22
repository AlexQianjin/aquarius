"use strict";
import React from "react";
import Layout from './layout.jsx';
import Products from "./pages/products.jsx";
import Home from "./pages/home.jsx";
import Company from "./pages/company.jsx";
import Item from "./pages/item.jsx";
import Checkout from "./pages/checkout.jsx";
import Receipt from "./pages/receipt.jsx";
import { Router, Route, browserHistory } from 'react-router'
const Routes = (
    <Router history={browserHistory}>
        <Route handler={Layout}>
            <Route name="home"
                path="/"
                handler={Home} />
            <Route name="company"
                path="company"
                handler={Company} />
            <Route name="products"
                path="products"
                handler={Products} />
            <Route name="item"
                path="item/:id"
                handler={Item} />
            <Route name="checkout"
                path="checkout"
                handler={Checkout} />
            <Route name="receipt"
                path="receipt"
                handler={Receipt} />
        </Route>
    </Router>
);
module.exports = Routes;