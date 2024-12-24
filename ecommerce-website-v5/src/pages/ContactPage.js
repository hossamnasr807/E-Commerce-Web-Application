// src/pages/Contact.js
import React from 'react';
import './ContactPage.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! If you have any questions, concerns, or feedback, feel free to reach out to us.</p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@ecommerce.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 E-Commerce Lane, Shopping City, SC 56789</p>
      </div>

      <form className="contact-form">
        <label>
          <strong>Name:</strong>
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          <strong>Email:</strong>
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          <strong>Message:</strong>
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
