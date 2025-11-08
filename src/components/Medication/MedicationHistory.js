import React from 'react';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const history = [
  { name: 'Amoxicillin', outcome: 'Resolved infection', date: '2025-07-10' },
  { name: 'Ibuprofen', outcome: 'Reduced inflammation', date: '2025-06-22' },
];

function MedicationHistory() {
  return (
    <div className="card mb-4">
      <div className="card-header">📚 Medication History</div>
      <ul className="list-group list-group-flush">
        {history.map((entry, index) => (
          <li className="list-group-item" key={index}>
            <strong>{entry.name}</strong> – {entry.outcome} ({formatDate(entry.date)})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicationHistory;
