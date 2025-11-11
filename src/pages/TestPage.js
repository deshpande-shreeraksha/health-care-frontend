import React, { useState } from 'react';
import axios from 'axios';

const BookTestPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testType: '',
    date: '',
    time: '',
    mode: 'Lab Visit'
  });

  const [message, setMessage] = useState('');

  const homeEligibleTests = [
    'Blood Test',
    'Urine Test',
    'COVID-19 RT-PCR',
    'Cholesterol Test'
  ];

  const isHomeVisitAllowed = homeEligibleTests.includes(formData.testType);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend.onrender.com/api/tests', formData);
      setMessage('Test booked successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        testType: '',
        date: '',
        time: '',
        mode: 'Lab Visit'
      });
    } catch (err) {
      setMessage('Failed to book test. Please try again.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4"> Book a Diagnostic Test</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="form-control mb-2" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="form-control mb-2" />

        <select name="testType" value={formData.testType} onChange={handleChange} required className="form-control mb-2">
          <option value="">Select a Test</option>
          <option value="Blood Test">Blood Test</option>
          <option value="Urine Test">Urine Test</option>
          <option value="X-Ray">X-Ray</option>
          <option value="MRI">MRI</option>
          <option value="CT Scan">CT Scan</option>
          <option value="ECG">ECG</option>
          <option value="Ultrasound">Ultrasound</option>
          <option value="COVID-19 RT-PCR">COVID-19 RT-PCR</option>
          <option value="Thyroid Panel">Thyroid Panel</option>
          <option value="Liver Function Test">Liver Function Test</option>
          <option value="Kidney Function Test">Kidney Function Test</option>
          <option value="Cholesterol Test">Cholesterol Test</option>
        </select>

        <input name="date" type="date" value={formData.date} onChange={handleChange} required className="form-control mb-2" />
        <input name="time" type="time" value={formData.time} onChange={handleChange} required className="form-control mb-2" />

       {isHomeVisitAllowed ? (
  <div className="mb-3">
    <label htmlFor="mode" className="form-label">Mode of Test</label>
    <select
      name="mode"
      value={formData.mode}
      onChange={handleChange}
      className="form-control"
      required
    >
      <option value="Lab Visit">Lab Visit</option>
      <option value="Home Collection">Home Collection</option>
    </select>
  </div>
) : formData.testType ? (
  <div className="mb-3">
    <label htmlFor="mode" className="form-label">Mode of Test</label>
    <input
      type="text"
      name="mode"
      value="Lab Visit Required – In-center test"
      readOnly
      className="form-control"
      placeholder="Lab Visit Required – In-center test"
    />
    <small className="text-muted">
      This test requires a visit to the diagnostic center.
    </small>
  </div>
) : null}


        <button type="submit" className="btn btn-primary">Book Test</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default BookTestPage;
