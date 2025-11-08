 import React from 'react';
import '../styles/imaging.css';

const ImagingPage = () => {
  return (
    <div className="container py-5 imaging-page">
      <h2 className="text-center text-dark mb-4">Medical Imaging Services</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">Overview of Imaging Modalities</h5>
        <p className="card-text">
          Medical imaging helps visualize internal structures for diagnosis and treatment. Common modalities include X-ray, CT, MRI, Ultrasound, and Mammography.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title">X-Ray</h5>
              <p className="card-text">Quick imaging for bones and chest conditions.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-info">
            <div className="card-body">
              <h5 className="card-title">MRI</h5>
              <p className="card-text">Detailed soft tissue imaging using magnetic fields.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-warning">
            <div className="card-body">
              <h5 className="card-title">Ultrasound</h5>
              <p className="card-text">Real-time imaging for pregnancy and organ health.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-secondary mt-4" role="alert">
        Please consult your physician to determine the appropriate imaging test for your condition.
      </div>
    </div>
  );
};

export default ImagingPage;

