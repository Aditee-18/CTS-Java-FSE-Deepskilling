import React, { useState } from 'react';

function SayWelcome() {
  const [message, setMessage] = useState('');

  const handleSayWelcome = (name) => {
    setMessage(`Welcome to React Event Handling, ${name}!`);
  };

  return (
    <div className="card">
      <h2>Say Welcome Component</h2>
      <button onClick={() => handleSayWelcome('Developer')} className="btn btn-secondary">
        Say Welcome
      </button>
      {message && <p className="welcome-message">{message}</p>}
    </div>
  );
}

export default SayWelcome;
