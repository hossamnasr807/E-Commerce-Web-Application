import React, { useContext } from 'react';
import CartContext from '../context/CartContext'; // Import CartContext

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Use the CartContext

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100px', marginRight: '20px' }} />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(product.id)} style={{ marginTop: '10px', padding: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
