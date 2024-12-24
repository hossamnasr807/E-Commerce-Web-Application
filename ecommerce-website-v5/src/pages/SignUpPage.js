import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';  // Import the CSS for styling

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the Django API signup endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        country: country,
        email: email,
        password: password,
        confirm_password: confirmPassword
        //is_seller: isSeller
      });

      // Handle successful sign-up
      alert('Sign-up successful!');
      console.log('User created:', response.data);

      // Optionally, redirect the user to login page or dashboard
      // For example, use history.push('/login');
    } catch (err) {
      console.error('Error response:', err.response);
    
      // Handle errors (e.g., invalid form data)
      const errorMessage = err.response?.data?.error || 'An error occurred. Please try again.';
      alert(errorMessage);
    }
      
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Phone Number" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="Country" 
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Re-enter Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
