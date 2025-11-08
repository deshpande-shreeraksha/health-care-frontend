 
import React from 'react';
import '../styles/urine.css';

const UrinePage = () => {
  return (
    <div className="container py-5 urine-page">
      <h2 className="text-center text-warning mb-4">Urine Analysis</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">Purpose of Urinalysis</h5>
        <p className="card-text">
          Urine tests help detect urinary tract infections, kidney disorders, and metabolic conditions. They analyze pH, protein, glucose, and other markers.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-warning">
            <div className="card-body">
              <h5 className="card-title">Dipstick Test</h5>
              <p className="card-text">Quick screening for glucose, protein, and ketones.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Microscopic Analysis</h5>
              <p className="card-text">Examines cells, crystals, and bacteria under a microscope.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrinePage;
