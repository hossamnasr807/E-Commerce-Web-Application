import React from 'react';
import './FurniturePage.css';  // Import the CSS file for styling

const furniture = [
  { id: 1, name: 'Sofa Model A', price: 499.99, image: '/images/sofa_a.jpg' },
  { id: 2, name: 'Chair Model B', price: 99.99, image: '/images/chair_b.jpg' },
];

function FurniturePage() {
  return (
    <div className="furniture-page">
      <h2>Explore Our Furniture</h2>
      <div className="furniture-list">
        {furniture.map((item) => (
          <div className="furniture-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
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

export default FurniturePage;
