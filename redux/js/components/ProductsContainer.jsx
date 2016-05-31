import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { visibleProducts } from '../selectors';
import ProductItem from './ProductItem.jsx';
import ProductsList from './ProductsList.jsx';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
            <ProductsList title="Flux Shop Demo (Redux)">
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={() => this.props.addToCart(product.id)}
                    />
                )}
            </ProductsList>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: visibleProducts(state)
    };
}

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)
