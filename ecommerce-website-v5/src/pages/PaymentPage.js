// src/pages/PaymentPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/PaymentPage.css';  // Import the common CSS file

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h2>Select Your Payment Method</h2>
      <p>Please choose one of the available payment methods to complete your purchase.</p>
      <div className="payment-options">
        <Link to="/fawry">
          <button className="payment-btn">Fawry</button>
        </Link>
        <Link to="/digital-wallet">
          <button className="payment-btn">Digital Wallet</button>
        </Link>
        <Link to="/credit-card">
          <button className="payment-btn">Credit Card</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
