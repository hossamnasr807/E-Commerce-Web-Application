import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Import the CartContext
import './PaymentMethodSelection.css';

const Fawry = () => {
  const { calculateTotalPrice } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  // Update the total price on page load or cart change
  useEffect(() => {
    const price = calculateTotalPrice();
    // Ensure the price is a valid number
    setTotalPrice(isNaN(price) ? 0 : price);
  }, [calculateTotalPrice]);

  return (
    <div className="payment-method-card">
      <h2>Fawry Payment</h2>
      <form>
        <input
          type="text"
          placeholder="Enter Fawry Code"
        />
        <input
          type="text"
          placeholder="Enter Amount"
        />
        {/* Total Price Label */}
        <div className="total-price-label">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <button type="submit" className="payment-btn">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Fawry;
