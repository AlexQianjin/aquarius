"use strict";
import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => (
    <Grid>
                <Row>
                    <Col xs={12}>
                        <Jumbotron>
                            <h1>My webshop!</h1>
                            <p>
                                Welcome to my webshop.
This is a simple information
unit where you can showcase
your best products or
tell a little about your webshop.
</p>
                            <p>
                                <LinkContainer to="/products">
                                    <Button bsStyle="primary"
                                        to="/products">View products</Button>
                                </LinkContainer>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
);
module.exports = Home;