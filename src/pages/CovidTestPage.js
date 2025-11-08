 import React from 'react';
import '../styles/covid.css';

const CovidTestPage = () => {
  return (
    <div className="container py-5 covid-page">
      <h2 className="text-center text-warning mb-4">COVID-19 Test Information</h2>

      <div className="card shadow-sm p-4 mb-4">
        <h5 className="card-title">Types of COVID Tests</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">RT-PCR Test – Most accurate, lab-based</li>
          <li className="list-group-item">Rapid Antigen Test – Quick results, less sensitive</li>
          <li className="list-group-item">Antibody Test – Detects past infection</li>
        </ul>
      </div>

      <div className="alert alert-info mt-4" role="alert">
        Please bring a valid ID and wear a mask during your visit.
      </div>
    </div>
  );
};

export default CovidTestPage;

