import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // For navigation
import ProductCard from '../components/ProductCard'; // Adjusted import path
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart
  const navigate = useNavigate(); // To navigate to the payment page

  // Function to calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (item.price || 0); // Ensure the price is valid
    }, 0);
  };

  const totalPrice = calculateTotalPrice(); // Calculate the total price of the cart items

  const handleCheckout = () => {
    // Navigate to the payment method selection page instead of the payment page directly
    navigate('/payment');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isInCart={true} // Pass isInCart as a prop to change button text accordingly
              handleCartAction={() => removeFromCart(item.id)} // Remove item from cart
            />
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="total-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3> {/* Display total price */}
        </div>
      )}

      {cart.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default CartPage;
