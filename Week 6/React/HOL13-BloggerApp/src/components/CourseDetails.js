import React, { useState } from 'react';

function CourseDetails() {
  const [courseStatus, setCourseStatus] = useState('IN_PROGRESS');

  const renderStatusBadge = () => {
    switch (courseStatus) {
      case 'NOT_ENROLLED':
        return <span className="status-tag status-gray">Not Enrolled</span>;
      case 'IN_PROGRESS':
        return <span className="status-tag status-blue">In Progress</span>;
      case 'COMPLETED':
        return <span className="status-tag status-green">Completed</span>;
      default:
        return null;
    }
  };

  const renderActionContent = () => {
    switch (courseStatus) {
      case 'NOT_ENROLLED':
        return <p>Click below to enroll in Java Full Stack Deepskilling Course.</p>;
      case 'IN_PROGRESS':
        return <p>You have completed 60% of the modules. Keep going!</p>;
      case 'COMPLETED':
        return <p>Congratulations! You have received your certification.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <h2>Course Details</h2>
      <div className="course-header">
        <h3>Java Full Stack Deepskilling</h3>
        {renderStatusBadge()}
      </div>

      {renderActionContent()}

      <div className="status-switcher">
        <label>Set Status: </label>
        <select value={courseStatus} onChange={(e) => setCourseStatus(e.target.value)}>
          <option value="NOT_ENROLLED">Not Enrolled</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
    </div>
  );
}

export default CourseDetails;
