// src/pages/FavoritesPage.js
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import PopupMessage from '../components/PopupMessage'; // Import the PopupMessage component
import "./FavoritesPage.css";

function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No items in your favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div className="favorites-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <button
                className="remove-from-favorites-btn"
                onClick={() => removeFromFavorites(item.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
