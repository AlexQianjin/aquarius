"use strict";
import Reflux from 'reflux';
import Request from 'superagent';
import Actions from './actions/products';

const ProductStore = Reflux.createStore({
    init() {
        this.listenTo(Actions.FetchProducts, this.onFetchProducts);
    },
    onFetchProducts() {
        Request
            .get('/products.json')
            .end((err, res) => {
                this.trigger(JSON.parse(res.text));
            });
    }
});

module.exports = ProductStore;