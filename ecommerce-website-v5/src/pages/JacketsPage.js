import React from 'react';
import './JacketsPage.css';  // Import the CSS file for styling

const jackets = [
  { id: 1, name: 'Jacket Model A', price: 99.99, image: '/images/jacket_a.jpg' },
  { id: 2, name: 'Jacket Model B', price: 129.99, image: '/images/jacket_b.jpg' },
];

function JacketsPage() {
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
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="add-to-favorite-btn">Add to Favorite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JacketsPage;
