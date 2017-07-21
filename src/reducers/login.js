'use strict';
import { REQUEST_LOGIN_USER, RECEIVE_LOGIN_USER, RECEIVE_LOGIN_FAIL} from '../constants/ActionTypes';

export default function user(state = {
    message: "",
    isFetching: false,
    userData: {
        username: '',
        password: ''
    },
    loggedIn: false
}, action) {
    switch (action.type) {
        case REQUEST_LOGIN_USER:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_LOGIN_USER:
            return {
                ...state,
                isFetching: false,
                posts: action.posts,
                userData:{username: action.login.username},
                timestamp: action.receviedAt,
                loggedIn: true
            };
        case RECEIVE_LOGIN_FAIL:
            return {
                ...state,
                userData: {username: action.login.username},
                error: "Invalid login",
                timestamp: action.receviedAt
            };
        default:
            return state
    }
}


