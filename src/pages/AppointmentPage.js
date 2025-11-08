import React, { useState } from 'react';
import '../styles/AppointmentPage.css';

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    department: '',
    doctor: '',
    time: '',
    mode: '',
  });

  const departments = {
    Cardiology: ['Dr. A. Mehta', 'Dr. R. Kapoor'],
    Neurology: ['Dr. S. Iyer', 'Dr. T. Reddy'],
    Pathology: ['Dr. N. Sharma', 'Dr. M. Das'],
    Radiology: ['Dr. K. Verma', 'Dr. L. Singh'],
    General: ['Dr. P. Rao', 'Dr. B. Jain'],
  };

  const timeSlots = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment confirmed!');
  };

  return (
    <div className="appointment-container">
      <h2 className="mb-4 text-center">🗓️ Book Your Appointment</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Preferred Date</label>
          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Department</label>
          <select className="form-select" name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select Department</option>
            {Object.keys(departments).map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        {formData.department && (
          <div className="col-md-6">
            <label className="form-label">Doctor</label>
            <select className="form-select" name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="">Select Doctor</option>
              {departments[formData.department].map((doc) => (
                <option key={doc} value={doc}>{doc}</option>
              ))}
            </select>
          </div>
        )}
        <div className="col-md-6">
          <label className="form-label">Time Slot</label>
          <select className="form-select" name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Consultation Mode</label>
          <select className="form-select" name="mode" value={formData.mode} onChange={handleChange} required>
            <option value="">Select Mode</option>
            <option value="video">💻 Video Consultation</option>
            <option value="inperson">🏥 In-Person Visit</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Confirm Appointment</button>
        </div>
      </form>

      {/* Conditional Instructions */}
      {formData.mode === 'inperson' && (
        <div className="alert alert-warning mt-4">
          Please bring a valid ID and wear a mask during your visit.
        </div>
      )}
      {formData.mode === 'video' && (
        <div className="alert alert-info mt-4">
          A secure video link will be sent to your email before the appointment.
        </div>
      )}
    </div>
  );
}

export default AppointmentPage;
