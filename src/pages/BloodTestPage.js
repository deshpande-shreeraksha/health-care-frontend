import React from 'react';
import '../styles/blood.css';

const BloodTestPage = () => {
  return (
    <div className="container py-5 blood-page">
      <h2 className="text-center text-danger mb-4">Blood Test Information</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">Why Blood Tests Matter</h5>
        <p className="card-text">
          Blood tests help diagnose conditions, monitor health, and guide treatment decisions.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">CBC (Complete Blood Count)</h5>
              <p className="card-text">Analyzes red cells, white cells, and platelets.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-warning">
            <div className="card-body">
              <h5 className="card-title">Blood Sugar</h5>
              <p className="card-text">Checks glucose levels for diabetes screening.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTestPage;
