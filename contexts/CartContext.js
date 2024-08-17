import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        console.log('Item added to cart:', item); // Debugging: Log added item
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);