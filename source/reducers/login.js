'use strict';
import { LOGIN_USER, LOGIN_FAIL } from '../actions/login';
import { combineReducers } from 'redux';

function user(state = {
    message: "",
    userData: {}
}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userData: action.loginResponse[0],
                timestamp: action.timestamp
            };
        case LOGIN_FAIL:
            return {
                ...state,
                userData: [],
                error: "Invalid login",
                timestamp: action.timestamp
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({ user });

export default rootReducer
