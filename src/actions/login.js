'use strict';
import fetch from 'isomorphic-fetch';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function login(userData) {
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

export function setLoginDetails(json) {
    const loginData = {
        type: LOGIN_USER,
        loginResponse: json,
        timestamp: Date.now()
    };
    sessionStorage.setItem('login', JSON.stringify(loginData));
    return loginData;
}

// function setLoginDetails(json) {
//     if (json.length === 0) {
//         return {
//             type: LOGIN_FAIL,
//             timestamp: Date.now()
//         }
//     }
//     return {
//         type: LOGIN_USER,
//         loginResponse: json,
//         timestamp: Date.now()
//     }
// }