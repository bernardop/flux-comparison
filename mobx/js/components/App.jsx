import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

class App extends Component {
    componentWillMount () {
        this.props.productStore.loadProducts();
    }

    render () {
        const { productStore, cartStore } = this.props;
        return (
            <div>
                <ProductsContainer productStore={productStore} />
                <CartContainer cartStore={cartStore} />
                <DevTools />
            </div>
        );
    }
}

App = observer(App);

export default App;
