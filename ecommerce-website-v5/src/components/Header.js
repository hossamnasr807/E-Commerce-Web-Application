// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-container">
          {/* Logo */}
          <h1 className="logo">E-Commerce</h1>
          
          {/* Left-aligned nav links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          
          {/* Right-aligned Login/Sign Up links */}
          <ul className="auth-links">
            <li><Link to="/login" className="login-link">Login</Link></li>
            <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
