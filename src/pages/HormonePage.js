 import React from 'react';
import '../styles/hormone.css';

const HormonePage = () => {
  return (
    <div className="container py-5 hormone-page">
      <h2 className="text-center text-secondary mb-4">Hormone Panel Overview</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">What Are Hormone Tests?</h5>
        <p className="card-text">
          Hormone tests help evaluate levels of key hormones like estrogen, testosterone, thyroid hormones, cortisol, and insulin. These tests are vital for diagnosing imbalances affecting metabolism, mood, fertility, and more.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-secondary">
            <div className="card-body">
              <h5 className="card-title">Thyroid Panel</h5>
              <p className="card-text">Includes T3, T4, and TSH to assess thyroid function.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Sex Hormones</h5>
              <p className="card-text">Estrogen, progesterone, and testosterone levels for reproductive health.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-secondary mt-4" role="alert">
        Consult your physician for personalized hormone evaluation and treatment options.
      </div>
    </div>
  );
};

export default HormonePage;

