'use strict';
import fetch from 'isomorphic-fetch';
import createHistory from 'history/createBrowserHistory'
import { REQUEST_LOGIN_USER, RECEIVE_LOGIN_USER, RECEIVE_LOGIN_FAIL} from '../constants/ActionTypes';

const history = createHistory();

export const requestLogin = login => ({
    type: REQUEST_LOGIN_USER,
    login
});

export const receiveLogin = (login, json) => ({
    type: RECEIVE_LOGIN_USER,
    login,
    posts: json,
    receviedAt: Date.now()
});

export const login = (login, callback) => dispatch => {
    dispatch(requestLogin(login));
    const body = {
        username: login.username,
        password: login.password
    };
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        method: 'post',
        body: JSON.stringify(body)
    };
    
    const apiUrl = `http://localhost:5000/v1/token`;
    // const apiUrl = 'https://weaponapi.herokuapp.com/v1/login';
    return fetch(apiUrl, options)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveLogin(login, json));
                // Listen for changes to the current location.
                const unlisten = history.listen((location, action) => {
                // location is an object like window.location
                console.log(action, location.pathname, location.state)
                });

                history.push('/main');
                location.href = location.href;
                // callback();

                const loginData = {
                    loginResponse: json,
                    timestamp: Date.now()
                };
                sessionStorage.setItem('login', JSON.stringify(loginData));

                unlisten();
            });
};