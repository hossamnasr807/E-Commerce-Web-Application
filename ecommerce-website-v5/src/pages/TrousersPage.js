import React from 'react';
import './TrousersPage.css';  // Import the CSS file for styling

const trousers = [
  { id: 1, name: 'Trouser Model A', price: 49.99, image: '/images/trouser_a.jpg' },
  { id: 2, name: 'Trouser Model B', price: 69.99, image: '/images/trouser_b.jpg' },
];

function TrousersPage() {
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
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="add-to-favorite-btn">Add to Favorite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrousersPage;
