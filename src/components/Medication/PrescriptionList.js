import React from 'react';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const prescriptions = [
  { name: 'Metformin', dosage: '500mg', frequency: 'Twice a day', start: '2025-09-01', end: '2025-10-01' },
  { name: 'Atorvastatin', dosage: '10mg', frequency: 'Once a day', start: '2025-08-15', end: '2025-09-15' },
];

function PrescriptionList() {
  return (
    <div className="card mb-4">
      <div className="card-header">📋 Current Prescriptions</div>
      <ul className="list-group list-group-flush">
        {prescriptions.map((med, index) => (
          <li className="list-group-item" key={index}>
            <strong>{med.name}</strong> – {med.dosage}, {med.frequency} (
            {formatDate(med.start)} to {formatDate(med.end)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionList;
