import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>React Event Handling Demo</h1>
      <div className="grid">
        <Counter />
        <SayWelcome />
        <SyntheticEvent />
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
