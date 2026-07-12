import React from 'react';

const IndianPlayers = () => {
  const players = [
    'Virat Kohli',
    'Rohit Sharma',
    'KL Rahul',
    'Shikhar Dhawan',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'MS Dhoni',
    'Jasprit Bumrah',
    'Rishabh Pant',
    'Yuzvendra Chahal',
    'Bhuvneshwar Kumar'
  ];

  const oddTeam = players.filter((_, index) => index % 2 !== 0);
  const evenTeam = players.filter((_, index) => index % 2 === 0);

  const [first, second, third, ...rest] = oddTeam;
  const [p1, p2, p3, ...remaining] = evenTeam;

  const t20Players = ['Suryakumar Yadav', 'Ishan Kishan', 'Deepak Chahar', 'Shreyas Iyer'];
  const ranjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Prithvi Shaw', 'Hanuma Vihari'];

  const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team (Destructured)</h2>
      <p>Player 1: {first}</p>
      <p>Player 2: {second}</p>
      <p>Player 3: {third}</p>
      <ul>
        {rest.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team (Destructured)</h2>
      <p>Player 1: {p1}</p>
      <p>Player 2: {p2}</p>
      <p>Player 3: {p3}</p>
      <ul>
        {remaining.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>T20 Players</h2>
      <ul>
        {t20Players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Ranji Trophy Players</h2>
      <ul>
        {ranjiTrophyPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (Spread Operator)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
