"use strict";
import React from "react";
import Layout from './layout.jsx';
import Products from "./pages/products.jsx";
import Home from "./pages/home.jsx";
import Company from "./pages/company";
import Item from "./pages/item.jsx";
import Checkout from "./pages/checkout.jsx";
import Receipt from "./pages/receipt.jsx";
import Menu from "./components/menu.jsx";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

let cart = [];
const Routes = (
    <Router>
        <Layout cart={cart}>
            <Switch>
                <Route exact={true} name="home" path="/" component={Home} />
                <Route name="company" path="/company" component={Company} />
                <Route name="products" path="/products" handler={Products} />
                <Route name="item" path="/item/:id" handler={Item} />
                <Route name="checkout" path="/checkout" handler={Checkout} />
                <Route name="receipt" path="/receipt" handler={Receipt} />
            </Switch>
        </Layout>
    </Router>
);
module.exports = Routes;