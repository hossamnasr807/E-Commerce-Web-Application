import React from 'react';
import './TrousersPage.css';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import PopupMessage from '../components/PopupMessage';

const trousers = [
  { id: 1, name: 'Acid Brown Colossus Baggy Jeans', price: 49.99, image: '/images/jeans1.png' },
  { id: 2, name: 'Jaded London Colossus Baggy Jeans', price: 69.99, image: '/images/jeans2.png' },
];

function TrousersPage() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart, removeFromCart, cart, popup } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInFavorites = (id) => favorites.some((item) => item.id === id);

  return (
    <div className="trousers-page">
      <h2>Explore Our Trousers</h2>
      <div className="trousers-list">
        {trousers.map((trouser) => (
          <div className="trouser-card" key={trouser.id}>
            <img src={trouser.image} alt={trouser.name} />
            <h3>{trouser.name}</h3>
            <p>${trouser.price.toFixed(2)}</p>
            <div className="button-group">
              <button
                className={`add-to-cart-btn ${isInCart(trouser.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInCart(trouser.id)) {
                    removeFromCart(trouser.id);
                  } else {
                    addToCart(trouser);
                  }
                }}
              >
                {isInCart(trouser.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <button
                className={`add-to-favorite-btn ${isInFavorites(trouser.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInFavorites(trouser.id)) {
                    removeFromFavorites(trouser.id);
                  } else {
                    addToFavorites(trouser);
                  }
                }}
              >
                {isInFavorites(trouser.id) ? 'Remove from Favorites' : 'Add to Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <PopupMessage message={popup.message} type={popup.type} />
    </div>
  );
}

export default TrousersPage;
