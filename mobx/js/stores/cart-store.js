import { extendObservable, action, computed } from 'mobx';

import shop from '../api/shop.js';

export class CartStore {
    constructor () {
        extendObservable(this, {
            cartProducts: []
        });
    }

    total = computed(() => {
        return this.cartProducts.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0).toFixed(2);
    });

    updateQuantity = action((productId) => {
        var product = this.cartProducts.filter((product) => product.id === productId)[0];
        product.quantity += 1;
    });

    checkout = action(() => {
        this.cartProducts[0].store.loadProducts();
        this.cartProducts = [];
    });
}
