// context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState({ message: '', type: '' });

  // Calculate the total price of products in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setPopup({ message: 'Added to Cart', type: 'success' });
    setTimeout(() => setPopup({ message: '', type: '' }), 3000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setPopup({ message: 'Removed from Cart', type: 'error' });
    setTimeout(() => setPopup({ message: '', type: '' }), 3000);
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, popup, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
