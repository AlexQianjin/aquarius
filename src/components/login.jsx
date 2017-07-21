import React, { Component } from 'react';
import { Grid, Row, Col, Button, Input, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { render } from 'react-dom';
import store from '../stores/store';
import { login, setLoginDetails, login_ } from '../actions/login';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import DevTools from './devtools';

class Login extends Component {
    componentWillMount() {
        // const { dispatch } = this.props;
        // let storedSessionLogin = sessionStorage.getItem('login');
        // if (storedSessionLogin) {
        //     dispatch(
        //         setLoginDetails(
        //             JSON.parse(storedSessionLogin).loginResponse)
        //     );
        //     this.props.history.push('/main');
        // }
    }

    componentDidMount() {
    }
    
    handleSelect() {
        const { dispatch } = this.props;
        dispatch(
            login(
                {
                    username: this.username.value,
                    password: this.password.value
                }, () => {this.props.history.push('/main')}))
    }

    handleLogin = e => {
        const { dispatch } = this.props;

        dispatch(login_({username:this.username.value, password: this.password.value}));
    };

    renderWelcomeMessage() {
        // const { userData, error } = this.props;
        // let response;
        // if (userData.username) {
        //     response = "Welcome " + userData.username;
        // }
        // else {
        //     response = error;
        // }
        // return (<div>
        //     {response}
        // </div>);
    }

    renderInput() {
        const { userData } = this.props;

        return (<form>
            <div>
                <FormGroup>
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text"
                        inputRef={(input) => {this.username = input; }}
                        placeholder="username"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            <div>
                <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password"
                        inputRef={(input) => {this.password = input; }} 
                        placeholder="password"
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </div>
            {/* <Button onClick={this.handleSelect.bind(this)}>Login</Button>  */}
            <Button onClick={this.handleLogin}>Login</Button>
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
                {isFetching?<h2>Loading...</h2>: ''}
            </Grid>
        );
    }
};

function mapStateToProps(state) {
    const { message, userData, isFetching, posts, error } = state;

    return { message, userData, isFetching, posts, error };
}

export default connect(mapStateToProps)(Login);;