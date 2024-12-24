import React from 'react';
import './MobilePhonesPage.css';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import PopupMessage from '../components/PopupMessage';

const mobilePhones = [
  { id: 1, name: 'Iphone 16 Pro Max', price: 1999.99, image: '/images/iphone16promax.png' },
  { id: 2, name: 'Iphone 13 Pro Max', price: 799.99, image: '/images/iphone13promax.png' },
];

function MobilePhonesPage() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart, removeFromCart, cart, popup } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInFavorites = (id) => favorites.some((item) => item.id === id);

  return (
    <div className="mobile-phones-page">
      <h2>Explore Our Mobile Phones</h2>
      <div className="mobile-phones-list">
        {mobilePhones.map((phone) => (
          <div className="phone-card" key={phone.id}>
            <img src={phone.image} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p>${phone.price.toFixed(2)}</p>
            <div className="button-group">
              <button
                className={`add-to-cart-btn ${isInCart(phone.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInCart(phone.id)) {
                    removeFromCart(phone.id);
                  } else {
                    addToCart(phone);
                  }
                }}
              >
                {isInCart(phone.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <button
                className={`add-to-favorite-btn ${isInFavorites(phone.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInFavorites(phone.id)) {
                    removeFromFavorites(phone.id);
                  } else {
                    addToFavorites(phone);
                  }
                }}
              >
                {isInFavorites(phone.id) ? 'Remove from Favorites' : 'Add to Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <PopupMessage message={popup.message} type={popup.type} />
    </div>
  );
}

export default MobilePhonesPage;
