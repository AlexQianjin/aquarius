"use strict";
import React from "react";
import { render } from "react-dom";

class Footer extends React.Component {
    render() {
        return (
        <footer className="footer text-center">
                <div className="container">
                    <p className="text-muted">Copyright 2015 Your Webshop.All rights reserved.</p>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;