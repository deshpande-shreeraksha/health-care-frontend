import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('https://health-backend.onrender.com/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map(doc => (
          <li key={doc._id}>{doc.name} - {doc.specialty} ({doc.mode})</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
