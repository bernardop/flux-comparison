import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Cart from './Cart.jsx';

class CartContainer extends Component {
    render() {
        const { cartStore } = this.props;
        return (
            <Cart
                products={cartStore.cartProducts}
                total={cartStore.total.get()}
                onCheckoutClicked={() => cartStore.checkout()}
            />
        );
    }
}

CartContainer = observer(CartContainer);

export default CartContainer;
