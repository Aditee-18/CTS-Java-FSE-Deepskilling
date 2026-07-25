import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="Steeve" School="DVI Public School" total={284} goal={3} />
    </div>
  );
}

export default App;
