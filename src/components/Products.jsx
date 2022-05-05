// @ts-nocheck
import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

export default function Products() {
    const {
        state: { products },
        addToCart,
    } = useContext(AppContext);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    console.log('me ejecutaron Products');
    console.count('Products');

    return (
        <div className="Products">
            <div className="Products-items">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}
