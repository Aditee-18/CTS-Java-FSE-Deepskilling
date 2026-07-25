import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  return (
    <div>
      <h1>Cricket App</h1>
      <ListofPlayers />
      <hr />
      <IndianPlayers />
    </div>
  );
}

export default App;
