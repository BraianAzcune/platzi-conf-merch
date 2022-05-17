import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

export default function Checkout() {
    const {
        removeFromCart,
        state: { cart },
    } = useContext(AppContext);

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    const handleSumTotal = () => {
        const reducer = (acc, cv) => acc + cv.price;
        return cart.reduce(reducer, 0);
    };

    if (cart.length === 0) {
        return (
            <div className="checkout">
                <h2>Tu carrito esta vacio, agrega algo</h2>
                <Link to="/">
                    <button type="button">Ver productos</button>
                </Link>
            </div>
        );
    }
    console.log('hola');

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>Lista de pedidos:</h3>
                {cart.map((product) => (
                    <div key={product.id} className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                        <button
                            onClick={() => handleRemoveFromCart(product)}
                            type="button"
                        >
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                ))}
            </div>
            <div className="Checkout-sidebar">
                <h3>Precio Total: ${handleSumTotal()}</h3>
                <Link to="/checkout/information">
                    <button type="button">Continuar pedido</button>
                </Link>
            </div>
        </div>
    );
}
