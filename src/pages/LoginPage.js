import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };



  return (
    <div className="login-container">
      <h2>Login to MedVerse</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-login">Login</button>

      </form>
      <p className="login-note">
        Don't have an account?  <Link to="/register" className="text-info">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
