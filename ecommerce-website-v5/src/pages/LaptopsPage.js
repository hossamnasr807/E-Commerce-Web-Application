import React from 'react';
import './LaptopsPage.css';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import PopupMessage from '../components/PopupMessage';

const laptops = [
  { id: 1, name: 'Asus ROG Strix G15 15.6', price: 999.99, image: '/images/laptop2.png' },
  { id: 2, name: 'Asus ROG Strix G513QC-HF002T 15.6', price: 1299.99, image: '/images/laptop1.png' },
];

function LaptopsPage() {
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart, removeFromCart, cart, popup } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInFavorites = (id) => favorites.some((item) => item.id === id);

  return (
    <div className="laptops-page">
      <h2>Explore Our Laptops</h2>
      <div className="laptops-list">
        {laptops.map((laptop) => (
          <div className="laptop-card" key={laptop.id}>
            <img src={laptop.image} alt={laptop.name} />
            <h3>{laptop.name}</h3>
            <p>${laptop.price.toFixed(2)}</p>
            <div className="button-group">
              <button
                className={`add-to-cart-btn ${isInCart(laptop.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInCart(laptop.id)) {
                    removeFromCart(laptop.id);
                  } else {
                    addToCart(laptop);
                  }
                }}
              >
                {isInCart(laptop.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <button
                className={`add-to-favorite-btn ${isInFavorites(laptop.id) ? 'added' : ''}`}
                onClick={() => {
                  if (isInFavorites(laptop.id)) {
                    removeFromFavorites(laptop.id);
                  } else {
                    addToFavorites(laptop);
                  }
                }}
              >
                {isInFavorites(laptop.id) ? 'Remove from Favorites' : 'Add to Favorite'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <PopupMessage message={popup.message} type={popup.type} />
    </div>
  );
}

export default LaptopsPage;
