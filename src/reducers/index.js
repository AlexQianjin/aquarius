'use strict';
import { combineReducers } from 'redux';
import user from './login';

const rootReducer = combineReducers({ user });

export default rootReducer