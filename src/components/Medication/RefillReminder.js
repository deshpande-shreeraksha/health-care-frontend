import React from 'react';

function RefillReminder() {
  return (
    <div className="card mb-4">
      <div className="card-header">🔄 Refill Reminders</div>
      <div className="card-body">
        <p>Get notified when prescriptions are running low or about to expire.</p>
        <button className="btn btn-outline-warning">Set Refill Threshold</button>
      </div>
    </div>
  );
}

export default RefillReminder;
