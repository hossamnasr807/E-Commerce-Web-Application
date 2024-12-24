import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component
import { useCart } from '../context/CartContext';  // Import Cart context to get cart-related data

function ProductPage() {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, isInCart } = useCart();  // Cart-related functions

  // Simulate fetching product data (replace this with actual API call or static data)
  useEffect(() => {
    // Simulating product data for example
    const fetchedProducts = [
      { id: 1, name: 'Product 1', price: 10.99, image: 'product1.jpg' },
      { id: 2, name: 'Product 2', price: 15.99, image: 'product2.jpg' },
      { id: 3, name: 'Product 3', price: 20.99, image: 'product3.jpg' },
    ];

    setProducts(fetchedProducts);  // Set the products state
  }, []);

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
