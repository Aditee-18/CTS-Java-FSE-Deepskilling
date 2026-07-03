import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Shikhar Dhawan', score: 60 },
    { name: 'KL Rahul', score: 78 },
    { name: 'Hardik Pandya', score: 55 },
    { name: 'Ravindra Jadeja', score: 45 },
    { name: 'MS Dhoni', score: 90 },
    { name: 'Jasprit Bumrah', score: 30 },
    { name: 'Yuzvendra Chahal', score: 25 },
    { name: 'Bhuvneshwar Kumar', score: 40 },
    { name: 'Rishabh Pant', score: 72 }
  ];

  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {belowSeventy.map((player, index) => (
          <li key={index}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
