import React from 'react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import './ProductCard.css'; // Add your styling here

function ProductCard({ product }) {
  // Get cart context functions
  const { addToCart, removeFromCart, isInCart } = useCart();
  // Get favorites context functions
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();

  // Handle adding/removing products from cart
  const handleCartButtonClick = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id); // Remove from cart if already added
    } else {
      addToCart(product); // Add to cart if not added
    }
  };

  // Handle adding/removing products from favorites
  const handleFavoritesButtonClick = () => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id); // Remove from favorites if already added
    } else {
      addToFavorites(product); // Add to favorites if not added
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      
      {/* Add to Cart / Remove from Cart button */}
      <button
        className={`cart-btn ${isInCart(product.id) ? 'in-cart' : ''}`}
        onClick={handleCartButtonClick}
      >
        {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
      </button>

      {/* Add to Favorites / Remove from Favorites button */}

    </div>
  );
}

export default ProductCard;
