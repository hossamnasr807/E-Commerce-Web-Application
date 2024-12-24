import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Our Store</h2>

      {/* Product Categories Section */}
      <div className="categories-container">
        {/* Main Product Section - Mobile Phones */}
        <div className="category-item">
          <h3>Mobile Phones</h3>
          <p>Explore the latest mobile phones at amazing prices!</p>
          <img
            src="/images/product2.png" // Replace with the correct image path
            alt="Mobile Phones"
            className="category-image"
          />
          <Link to="/mobile-phones" className="view-details-link">
            View Mobile Phones
          </Link>
        </div>

        {/* Trousers Category */}
        <div className="category-item">
          <h3>Trousers</h3>
          <p>Discover a wide range of stylish trousers for all occasions.</p>
          <img
            src="/images/product3.png" // Replace with the correct image path
            alt="Trousers"
            className="category-image"
          />
          <Link to="/trousers" className="view-details-link">
            View Trousers
          </Link>
        </div>

        {/* Jackets Category */}
        <div className="category-item">
          <h3>Jackets</h3>
          <p>Explore our collection of jackets to stay warm and stylish.</p>
          <img
            src="/images/product1.png" // Replace with the correct image path
            alt="Jackets"
            className="category-image"
          />
          <Link to="/jackets" className="view-details-link">
            View Jackets
          </Link>
        </div>

        {/* Laptops Category */}
        <div className="category-item">
          <h3>Laptops</h3>
          <p>Discover the ideal laptop to boost your productivity and creativity.</p>
          <img
            src="/images/product4.png" // Replace with the correct image path
            alt="Laptops"
            className="category-image"
          />
          <Link to="/laptops" className="view-details-link">
            View Laptops
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
