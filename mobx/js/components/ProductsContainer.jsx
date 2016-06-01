import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProductItem from './ProductItem.jsx';
import ProductsList from './ProductsList.jsx';

class ProductsContainer extends Component {
    render() {
        const { productStore } = this.props;
        return (
            <ProductsList title="Shop Demo (Mobx)">
                {productStore.products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCartClicked={() => productStore.addToCart(product.id)}
                    />
                )}
            </ProductsList>
        );
    }
}

ProductsContainer = observer(ProductsContainer);

export default ProductsContainer;
