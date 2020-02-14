import {createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {} //just a default we're gonna passing in different function to change this
});

export default CartContext;