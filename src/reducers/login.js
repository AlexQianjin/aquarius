'use strict';
import { REQUEST_LOGIN_USER, RECEIVE_LOGIN_USER, RECEIVE_LOGIN_FAIL} from '../constants/ActionTypes';

export default function user(state = {
    message: "",
    userData: {}
}, action) {
    switch (action.type) {
        case RECEIVE_LOGIN_USER:
            return {
                ...state,
                userData: action.loginResponse[0],
                timestamp: action.timestamp
            };
        case RECEIVE_LOGIN_FAIL:
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


