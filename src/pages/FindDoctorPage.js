import React, { useState, useEffect } from 'react';
import '../styles/FindDoctorPage.css';

const allDoctors = [
  { name: 'Dr. Asha Rao', specialty: 'Cardiology', locality: 'Indiranagar', mode: 'In-Person' },
  { name: 'Dr. Ravi Menon', specialty: 'Cardiology', locality: 'Indiranagar', mode: 'Video & In-Person' },
  { name: 'Dr. Neha Jain', specialty: 'Dermatology', locality: 'Koramangala', mode: 'Video' },
  { name: 'Dr. Arjun Das', specialty: 'Dermatology', locality: 'Koramangala', mode: 'Video & In-Person' },
  { name: 'Dr. Priya Nair', specialty: 'Pediatrics', locality: 'Whitefield', mode: 'In-Person' },
  { name: 'Dr. Kiran Shetty', specialty: 'Pediatrics', locality: 'Whitefield', mode: 'Video' },
  { name: 'Dr. Meera Kulkarni', specialty: 'General Physician', locality: 'Jayanagar', mode: 'Video & In-Person' },
  { name: 'Dr. Sandeep Reddy', specialty: 'General Physician', locality: 'Jayanagar', mode: 'In-Person' },
];

function FindDoctorPage() {
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const validPairs = {};

    allDoctors.forEach(doc => {
      const key = `${doc.specialty}-${doc.locality}`;
      validPairs[key] = validPairs[key] ? [...validPairs[key], doc] : [doc];
    });

    const result = Object.values(validPairs).filter(group => group.length >= 2).flat();
    setFilteredDoctors(result);
  }, []);

  return (
    <div className="doctor-container">
      <h2>Find a Doctor</h2>
      <p>Select from verified specialists in your locality.</p>

      <div className="doctor-grid">
        {filteredDoctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <h5>{doc.name}</h5>
            <p><strong>Specialty:</strong> {doc.specialty}</p>
            <p><strong>Locality:</strong> {doc.locality}</p>
            <p><strong>Consultation Mode:</strong> {doc.mode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindDoctorPage;
