import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [popup, setPopup] = useState({ message: '', type: '' });

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
    setPopup({ message: 'Added to Favorites', type: 'success' });
    setTimeout(() => setPopup({ message: '', type: '' }), 3000);
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId));
    setPopup({ message: 'Removed from Favorites', type: 'error' });
    setTimeout(() => setPopup({ message: '', type: '' }), 3000);
  };

  // Check if product is in favorites
  const isInFavorites = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isInFavorites, popup }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
