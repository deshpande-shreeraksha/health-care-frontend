import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestPage() {
  const tests = [
    { name: 'Blood Test', path: '/blood', description: 'Complete blood count, glucose, cholesterol, and more.' },
    { name: 'Covid Test', path: '/covid', description: 'RT-PCR, antigen, and antibody testing for COVID-19.' },
    { name: 'Urine Test', path: '/urine', description: 'Routine urinalysis and kidney function screening.' },
    { name: 'Hormone Test', path: '/hormone', description: 'Thyroid, insulin, cortisol, and reproductive hormones.' },
    { name: 'Pathology Test', path: '/pathology', description: 'Biopsy, cytology, and tissue analysis.' },
    { name: 'Imaging Test', path: '/imaging', description: 'X-ray, MRI, CT scan, and ultrasound diagnostics.' },
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">🧪 Available Health Tests</h2>
      <div className="row">
        {tests.map((test, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{test.name}</h5>
                <p className="card-text">{test.description}</p>
                <Link to={test.path} className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestPage;
