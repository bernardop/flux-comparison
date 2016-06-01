import { extendObservable, action } from 'mobx';

import shop from '../api/shop.js';

class Product {
    constructor (store, id, title, price, inventory, image) {
        this.store = store;
        extendObservable(this, {
            id: id,
            title: title,
            price: price,
            inventory: inventory,
            image: image
        });
    }

    updateInventory = action((inventory) => {
        this.inventory = inventory;
    });
}

export class ProductStore {
    constructor (cartStore) {
        this.cartStore = cartStore;
        extendObservable(this, {
            products: []
        });
    }

    loadProducts = action(() => {
        shop.getProducts(action((products) => {
            this.products = products.map((product) => {
                return new Product(this, product.id, product.title, product.price, product.inventory, product.image);
            });
        }));
    });

    addToCart = action((productId) => {
        var product = this.products.filter((product) => product.id === productId)[0];
        if (this.cartStore.cartProducts.findIndex((cartProduct) => cartProduct.id === product.id) > -1) {
            this.cartStore.updateQuantity(product.id);
        } else {
            this.cartStore.cartProducts.push({...product, quantity: 1});
        }
        product.updateInventory(product.inventory - 1);
    });
}
