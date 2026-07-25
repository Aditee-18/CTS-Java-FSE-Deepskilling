import React, { useState } from 'react';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Airline Ticket Booking System</h1>
        <div className="auth-button">
          {isLoggedIn ? (
            <button onClick={handleLogoutClick} className="btn btn-danger">Logout</button>
          ) : (
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
          )}
        </div>
      </header>
      <main className="main-content">
        <Greeting isLoggedIn={isLoggedIn} />
      </main>
    </div>
  );
}

export default App;
