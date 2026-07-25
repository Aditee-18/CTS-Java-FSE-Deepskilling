import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { cohortCode: 'INTADM22DF001', technology: 'Java FSE', startDate: '2022-01-10', status: 'Ongoing' },
    { cohortCode: 'INTADM22DF002', technology: 'React', startDate: '2022-02-15', status: 'Completed' }
  ];

  return (
    <div>
      <h2>Cohort Details</h2>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
