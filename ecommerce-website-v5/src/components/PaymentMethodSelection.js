import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentMethodSelection.css'; // Ensure the CSS file is linked

const PaymentMethodSelection = () => {
  return (
    <div className="payment-method-selection">
      <h2>Select Payment Method</h2>

      {/* Container for the payment methods */}
      <div className="payment-methods">
        {/* Digital Wallet Payment Option */}
        <div className="payment-method">
          <img 
            src="/images/digital-wallet-icon.png" 
            alt="Digital Wallet" 
            className="payment-icon" 
          />
          <Link to="/digital-wallet">
            <button className="payment-btn">
              Digital Wallet
            </button>
          </Link>
        </div>

        {/* Credit Card Payment Option */}
        <div className="payment-method">
          <img 
            src="/images/credit-card-icon.png" 
            alt="Credit Card" 
            className="payment-icon" 
          />
          <Link to="/credit-card">
            <button className="payment-btn">
              Credit Card
            </button>
          </Link>
        </div>

        {/* Fawry Payment Option */}
        <div className="payment-method">
          <img 
            src="/images/fawry-icon.png" 
            alt="Fawry" 
            className="payment-icon" 
          />
          <Link to="/fawry">
            <button className="payment-btn">
              Fawry
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;
    