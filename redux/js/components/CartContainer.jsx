import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { cartTotal, cartProducts } from '../selectors';
import Cart from './Cart.jsx';

class CartContainer extends Component {
    render() {
        const { products, total, dispatch } = this.props;
        return (
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={() => this.props.checkout()}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        products: cartProducts(state),
        total: cartTotal(state)
    };
}

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer);
