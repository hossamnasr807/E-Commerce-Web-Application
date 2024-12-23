import React from 'react';
import './JacketsPage.css';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import PopupMessage from '../components/PopupMessage';

const jackets = [
  { id: 1, name: 'Bonneville Leather Jacket', price: 99.99, image: '/images/jacket1.png' },
  { id: 2, name: 'Schott NYC Waxy Cowhide Leather Moto Jacket', price: 129.99, image: '/images/jacket2.png' },
];

function JacketsPage() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart, removeFromCart, cart, popup } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInFavorites = (id) => favorites.some((item) => item.id === id);

  return (
    <div className="jackets-page">
      <h2>Explore Our Jackets</h2>
      <div className="jackets-list">
        {jackets.map((jacket) => (
          <div className="jacket-card" key={jacket.id}>
            <img src={jacket.image} alt={jacket.name} />
            <h3>{jacket.name}</h3>
            <p>${jacket.price.toFixed(2)}</p>
            <div className="button-group">
              <button
                className={`add-to-cart-btn ${isInCart(jacket.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInCart(jacket.id)) {
                    removeFromCart(jacket.id);
                  } else {
                    addToCart(jacket);
                  }
                }}
              >
                {isInCart(jacket.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <button
                className={`add-to-favorite-btn ${isInFavorites(jacket.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInFavorites(jacket.id)) {
                    removeFromFavorites(jacket.id);
                  } else {
                    addToFavorites(jacket);
                  }
                }}
              >
                {isInFavorites(jacket.id) ? 'Remove from Favorites' : 'Add to Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <PopupMessage message={popup.message} type={popup.type} />
    </div>
  );
}

export default JacketsPage;
