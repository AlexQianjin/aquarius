import React from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Main extends React.Component{
    handleLogOut(){
        sessionStorage.removeItem('login');
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                <h3>This is the main page!</h3>
                <Button onClick={this.handleLogOut.bind(this)}>Log out</Button>
            </div>
        );
    }
}