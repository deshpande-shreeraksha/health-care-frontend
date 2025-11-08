import React from 'react';
import PrescriptionList from '../components/Medication/PrescriptionList';
import DosageScheduler from '../components/Medication/DosageScheduler';
import RefillReminder from '../components/Medication/RefillReminder';
import InteractionChecker from '../components/Medication/InteractionChecker';
import MedicationHistory from '../components/Medication/MedicationHistory';
import '../styles/MedicationPage.css';

function MedicationPage() {
  return (
    <div className="medication-page">
      <h2 className="text-center mb-4">🩺 Medication Management</h2>
      <PrescriptionList />
      <DosageScheduler />
      <RefillReminder />
      <InteractionChecker />
      <MedicationHistory />
    </div>
  );
}

export default MedicationPage;
