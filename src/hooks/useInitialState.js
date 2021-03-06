import { useState } from 'react';
import initialState from '../initialState';

export default function useInitialState() {
    const [state, setState] = useState(initialState);

    function addToCart(payload) {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }

    function removeFromCart(payload) {
        setState({
            ...state,
            cart: state.cart.filter((item) => item.id !== payload.id),
        });
    }

    function addToBuyer(buyer) {
        setState({
            ...state,
            buyer: [...state.buyer, buyer],
        });
    }

    function addNewOrder(payload) {
        setState({
            ...state,
            orders: [...state.orders, payload],
        });
    }

    return {
        addNewOrder,
        addToCart,
        removeFromCart,
        state,
        addToBuyer,
    };
}
