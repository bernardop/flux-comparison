import { createSelector } from 'reselect';

const getProducts = (state) => state.products.byId;
const getVisibleIds = (state) => state.products.visibleIds;
const getCartQuantities = (state) => state.cart.quantityById;

const visibleProducts = createSelector(
    [getVisibleIds, getProducts],
    (visibleIds, products) => {
        return visibleIds.map((id) => {
            return products[id];
        });
    }
);

const cartProducts = createSelector(
    [getProducts, getCartQuantities],
    (products, quantities) => {
        const quantitiesKeys = Object.keys(quantities);
        if (quantitiesKeys.length > 0) {
            return quantitiesKeys.map((productId) => {
                const quantity = quantities[productId];
                const product = products[productId];
                return {...product, quantity: quantity};
            });
        } else {
            return [];
        }
    }
);

const cartTotal = createSelector(
    [cartProducts],
    (items) => {
        var total = 0;
        if (items.length > 0) {
            total = items.reduce((total, item) => {
                return total + (item.quantity * item.price)
            }, 0);
        }
        return total.toFixed(2);
    }
);

export { visibleProducts, cartProducts, cartTotal };
