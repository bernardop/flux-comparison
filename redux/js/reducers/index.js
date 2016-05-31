import { combineReducers } from 'redux';
import { default as cart } from './cart';
import { default as products } from './products';

export default combineReducers({
    cart,
    products
});
