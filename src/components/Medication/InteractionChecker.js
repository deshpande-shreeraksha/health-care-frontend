import React from 'react';

function InteractionChecker() {
  return (
    <div className="card mb-4">
      <div className="card-header">⚠️ Interaction Checker</div>
      <div className="card-body">
        <p>Check for drug-drug or drug-food interactions before starting new medications.</p>
        <button className="btn btn-outline-danger">Run Interaction Scan</button>
      </div>
    </div>
  );
}

export default InteractionChecker;
