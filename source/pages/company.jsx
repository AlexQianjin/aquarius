"use strict";
import React from "react";
import { render } from "react-dom";
import { Grid, Row, Col, Panel } from "react-bootstrap";
const Company = React.createClass({
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Panel>
                            <h1>The company</h1>
                            <p>Contact information</p>
                            <p>Phone number</p>
                            <p>History of our company</p>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
});
module.exports = Company;