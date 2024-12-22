import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ id, name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
