import React from 'react';

function Services() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-primary">Our Services</h1>
      <div className="row g-4">

        {/* Existing Services */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Find a Doctor</h5>
              <p className="card-text">Search by specialty, location, or consultation mode.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Medication Management</h5>
              <p className="card-text">Track prescriptions, set reminders, and manage refills.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Diagnostics</h5>
              <p className="card-text">Access blood, urine, and COVID test modules with results tracking.</p>
            </div>
          </div>
        </div>

        {/* New Services */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Teleconsultation</h5>
              <p className="card-text">Book secure video or audio consultations with certified doctors.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Health Records</h5>
              <p className="card-text">Store and access your medical history, lab reports, and prescriptions in one place.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Wellness Programs</h5>
              <p className="card-text">Join fitness, nutrition, and mental health programs tailored to your needs.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Emergency Assistance</h5>
              <p className="card-text">Quick access to ambulance services and emergency contacts.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Insurance Support</h5>
              <p className="card-text">Check coverage, submit claims, and get help with policy queries.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
