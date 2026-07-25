import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 85 },
    { name: 'Virat', score: 90 }
  ];

  const playersBelow70 = players.filter((player) => player.score <= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <h3>All Players</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
      <h3>List of Players having Scores Less Than or Equal 70</h3>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
