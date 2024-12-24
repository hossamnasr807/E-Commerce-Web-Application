import React from 'react';
import './MobilePhonesPage.css';  // Keep your existing CSS for layout

const mobilePhones = [
  { id: 1, name: 'Iphone 16', price: 599.99, image: '/images/phone_a.jpg' },
  { id: 2, name: 'Phone Model B', price: 799.99, image: '/images/phone_b.jpg' },
];

function MobilePhonesPage() {
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
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="add-to-favorite-btn">Add to Favorite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobilePhonesPage;
