"use strict";
import React from "react";
import { render } from "react-dom";
import { Nav, NavItem, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Menu = (props) => (
    <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">My webshop</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/company">
                            <Button bsStyle="link">About</Button>
                        </LinkContainer>
                        <LinkContainer  to="/products">
                            <Button bsStyle="link">Products</Button>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/checkout">
                            <Button bsStyle="link">Your cart: {props.cart.length} items</Button>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
);
module.exports = Menu;