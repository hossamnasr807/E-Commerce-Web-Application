import React, { useState } from 'react';
import axios from 'axios'; 
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email: email,
        password: password,
      });
    
      const token = response.data.token; // Expecting a token from the API
      localStorage.setItem('token', token);
    
      alert('Login successful!');
    } catch (err) {
      console.error('Error response:', err.response);
    
      // Fetch the error message from the backend, if available
      const errorMessage = err.response?.data?.error || 'An error occurred. Please try again.';
      alert(errorMessage);
    }
    

  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-actions">
          <button type="submit" className="form-button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
