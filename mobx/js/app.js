import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import { ProductStore } from './stores/product-store.js';
import { CartStore } from './stores/cart-store.js';

import { useStrict } from 'mobx';

useStrict(true);

const cartStore = new CartStore();
const productStore = new ProductStore(cartStore);

render(
    <App productStore={productStore} cartStore={cartStore} />,
    document.getElementById('mobx-app')
);
