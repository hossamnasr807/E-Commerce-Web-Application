import React, { useState } from 'react';
import './SignUpPage.css';  // Import the CSS for styling

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-up logic here
    console.log('Form Submitted:', { firstName, lastName, phoneNumber, country, email, password, confirmPassword });
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
