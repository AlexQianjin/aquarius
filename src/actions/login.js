'use strict';
import fetch from 'isomorphic-fetch';
import { LOGIN_USER, LOGIN_FAIL} from '../constants/ActionTypes';

export const login = (userData) => {
    const body = {
        username: userData.username,
        password: userData.password
    };
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 1234567890'
        },
        mode: 'cors',
        method: 'post',
        body: JSON.stringify(body)
    }
    //http://reactjsblueprintsuseradmin.herokuapp.com/v1/login
    return dispatch => {
        return fetch(`http://localhost:5000/v1/login`, options)
            .then(response => response.json())
            .then(json => dispatch(setLoginDetails(json)))
    }
}

export const setLoginDetails = json => {
    if (json.length === 0) {
        return {
            type: LOGIN_FAIL,
            timestamp: Date.now()
        }
    }

    const loginData = {
        type: LOGIN_USER,
        loginResponse: json,
        timestamp: Date.now()
    };
    sessionStorage.setItem('login', JSON.stringify(loginData));
    return loginData;
}