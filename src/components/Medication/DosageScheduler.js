import React from 'react';

function DosageScheduler() {
  return (
    <div className="card mb-4">
      <div className="card-header">⏰ Dosage Alerts</div>
      <div className="card-body">
        <p>Set reminders for each dose to avoid missed medications.</p>
        <button className="btn btn-outline-primary">Configure Alerts</button>
      </div>
    </div>
  );
}

export default DosageScheduler;
