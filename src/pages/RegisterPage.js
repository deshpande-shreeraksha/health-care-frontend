import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterPager.css'; // Optional: for custom styling

function RegisterPage() {
  return (
    <div className="register-container">

      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Create Your MedVerse Account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create password" />
          </div>
          <button type="submit" className="btn btn-outline-light w-100">Register</button>
        </form>
        <div className="mt-3 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-info">Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
