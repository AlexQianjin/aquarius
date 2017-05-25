import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { render, findDOMNode } from 'react-dom';
import store from './stores/store';
import { login } from './actions/login'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import DevTools from './devtools';

class App extends Component {
    handleSelect() {
        const { dispatch } = this.props;
        dispatch(
            login(
                {
                    username: findDOMNode(this.refs.username).value,
                    password: findDOMNode(this.refs.password).value
                }))
    }

    renderWelcomeMessage() {
        const { user } = this.props;
        let response;
        if (user.userData.name) {
            response = "Welcome " + user.userData.name;
        }
        else {
            response = user.error;
        }
        return (<div>
            {response}
        </div>);
    }

    renderInput() {
        return (<form>
            <div>
                <FormGroup>
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text"
                        ref="username"
                        placeholder="username"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            <div>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password"
                        ref="password" placeholder="password"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            <Button onClick={this.handleSelect.bind(this)}>Login</Button>
        </form>)
    }

    render() {
        const { user } = this.props;
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
    const { user } = state;
    const { message } = user || {
            message: ""
        }
    return {
        user
    }
}

const LoginApp = connect(mapStateToProps)(App);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <LoginApp />
            </Provider>
        )
    }
}

render(
    <Root />,
    document.getElementById('app')
);