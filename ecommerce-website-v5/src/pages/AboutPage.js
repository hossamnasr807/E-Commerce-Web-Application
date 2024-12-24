// src/pages/About.js
import React from 'react';
import './AboutPage.css';

function About() {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to E-Commerce, your one-stop destination for all your shopping needs. Our mission is to provide a seamless online shopping experience, offering a wide range of high-quality products at competitive prices.
      </p>

      <p>
        We believe in innovation, quality, and exceptional customer service. From the latest gadgets to everyday essentials, we aim to bring the best of the market right to your doorstep.
      </p>

      <p>
        <strong>Why Choose Us?</strong>
      </p>
      <ul>
        <li>Wide variety of products</li>
        <li>Secure and hassle-free shopping</li>
        <li>Fast and reliable delivery</li>
        <li>Dedicated customer support</li>
      </ul>

      <p>Thank you for choosing us. We look forward to serving you!</p>
    </div>
  );
}

export default About;
