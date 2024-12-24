// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1>E-Commerce</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="login-link">Login</Link></li>
          <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
