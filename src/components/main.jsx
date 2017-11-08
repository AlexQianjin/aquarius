import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Main extends React.Component{
    constructor() {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut = function(e) {
        sessionStorage.removeItem('login');
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <h3>This is the main page!</h3>
                <Button onClick={this.handleLogOut}>Log out</Button>
            </div>
        );
    }
}