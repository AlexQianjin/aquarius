'use strict';
import rootReducer from '../reducers/index';
import { compose, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const configureStore = compose(applyMiddleware(thunk))(createStore);
const store = configureStore(rootReducer);

export default store;
