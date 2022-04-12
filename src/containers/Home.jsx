import React from 'react';

/* eslint-disable react/react-in-jsx-scope */
import initialState from '../initialState';
import Products from '../components/Products';

export default function Home() {
    return <Products products={initialState.products} />;
}
