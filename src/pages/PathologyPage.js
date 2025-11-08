 import React from 'react';
import '../styles/pathology.css';

const PathologyPage = () => {
  return (
    <div className="container py-5 pathology-page">
      <h2 className="text-center text-info mb-4">Pathology Services</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">What is Pathology?</h5>
        <p className="card-text">
          Pathology involves the study of disease through laboratory analysis of bodily fluids and tissues. It helps diagnose conditions like infections, cancer, and autoimmune disorders.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">Histopathology</h5>
              <p className="card-text">Microscopic examination of tissue samples for disease detection.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-secondary">
            <div className="card-body">
              <h5 className="card-title">Clinical Biochemistry</h5>
              <p className="card-text">Analyzes blood and urine for metabolic and hormonal disorders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathologyPage;
