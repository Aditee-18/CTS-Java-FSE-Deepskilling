import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianCaptains = ['Kapil Dev', 'Gavaskar', 'Dhoni', 'Virat', 'Ganguly'];

  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];
  const [firstCaptain, secondCaptain, ...otherCaptains] = IndianCaptains;

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Merged Players (Spread Operator)</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <h3>Captains Destructuring</h3>
      <p>First Captain: {firstCaptain}</p>
      <p>Second Captain: {secondCaptain}</p>
      <p>Other Captains: {otherCaptains.join(', ')}</p>
    </div>
  );
};

export default IndianPlayers;
