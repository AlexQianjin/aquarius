"use strict";
import React from "react";
import { render } from "react-dom";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";
// import Actions from "./actions/products";
// import ProductStore from "./stores/products";

const Layout = (props) => (
    <div>
        <Menu cart={props.cart} />
        {React.cloneElement(props.children)}
        <Footer />
    </div>
);

module.exports = Layout;