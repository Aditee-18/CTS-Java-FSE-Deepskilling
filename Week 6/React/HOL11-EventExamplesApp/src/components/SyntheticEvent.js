import React, { useState } from 'react';

function SyntheticEvent() {
  const [eventDetails, setEventDetails] = useState(null);

  const handleCustomClick = (e) => {
    setEventDetails({
      eventType: e.type,
      targetTagName: e.target.tagName,
      targetText: e.target.innerText,
      timeStamp: e.timeStamp
    });
  };

  return (
    <div className="card">
      <h2>Synthetic Event Details</h2>
      <button onClick={handleCustomClick} className="btn btn-info">
        Trigger Synthetic Event
      </button>
      {eventDetails && (
        <div className="event-info">
          <p><strong>Event Type:</strong> {eventDetails.eventType}</p>
          <p><strong>Target Tag:</strong> {eventDetails.targetTagName}</p>
          <p><strong>Target Text:</strong> {eventDetails.targetText}</p>
          <p><strong>Timestamp:</strong> {eventDetails.timeStamp}</p>
        </div>
      )}
    </div>
  );
}

export default SyntheticEvent;
