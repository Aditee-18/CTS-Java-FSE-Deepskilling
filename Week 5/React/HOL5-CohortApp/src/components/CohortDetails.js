import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const statusStyle = {
    color: cohort.status === 'Ongoing' ? 'green' : 'red',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{cohort.cohortCode} - {cohort.technology}</h3>
      <p>Start Date: {cohort.startDate}</p>
      <p>Status: <span style={statusStyle}>{cohort.status}</span></p>
    </div>
  );
};

export default CohortDetails;
