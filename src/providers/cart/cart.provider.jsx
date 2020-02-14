import React, { useState, useEffect, createContext} from 'react';

import {addItemToCart, filterItems, getCartItemsCount, getCartItemsTotalPrice, removeItemFromCart} from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartItemsTotalPrice: 0
});

const CartProvider = ({ children }) => {
    const [ hidden, setHidden ] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [ cartItemsTotalPrice, setItemsTotalPrice ] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItems(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);

    useEffect(() => {
        setCartItemsCount(getCartItemsCount(cartItems)); //getCartItemsCount return a total number
        setItemsTotalPrice(getCartItemsTotalPrice(cartItems))
    }, [cartItems]); //we want to fire off this useEffect hook whenever cartItems updates

    return (
        <CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItemFromCart,
            cartItemsCount,
            cartItemsTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
};


export default CartProvider;