import React, { Component } from 'react';
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { render } from 'react-dom';
import store from '../stores/store';
import { login } from '../actions/login';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import DevTools from './devtools';

class Login extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        let storedSessionLogin = sessionStorage.getItem('login');
        if (storedSessionLogin) {
            this.props.history.push('/main');
        }
    }

    componentDidMount() {
    }

    handleLogin = e => {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(login({username:this.username.value, password: this.password.value}, () => {this.props.history.push('/main')}));
    };

    renderWelcomeMessage() {
        const { isFetching } = this.props;

        let response = isFetching?<h2>Loading...</h2>: '';

        return (<div>{response}</div>);
    }

    renderInput() {
        const { userData, message } = this.props;

        return (<form onSubmit={this.handleLogin}>
            <div>
                <FormGroup>
                    <ControlLabel>Username </ControlLabel>
                    <FormControl type="text"
                        inputRef={(input) => {this.username = input; }}
                        placeholder="username"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            <div>
                <FormGroup>
                    <ControlLabel>Password </ControlLabel>
                    <FormControl type="password"
                        inputRef={(input) => {this.password = input; }} 
                        placeholder="password"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            <div>{message}</div>
            {/* <Button onClick={this.handleSelect.bind(this)}>Login</Button>  */}
            <Button type="submit">Login</Button>
        </form>)
    }

    render() {
        const { message, userData, isFetching } = this.props;
        return (
            <Grid>
                <DevTools store={store} />
                <Row>
                    <Col xs={12}>
                        <h3> Please log in </h3>
                    </Col>
                    <Col xs={12}>
                        {this.renderInput()}
                    </Col>
                    <Col xs={12}>
                        {this.renderWelcomeMessage()}
                    </Col>
                </Row>
                
            </Grid>
        );
    }
};

function mapStateToProps(state) {
    const { message, userData, isFetching, posts, error } = state.user;

    return { message, userData, isFetching, posts, error };
}

export default withRouter(connect(mapStateToProps)(Login));