import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/images/product1.png' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/images/product2.png' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/images/product3.png' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
