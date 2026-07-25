import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="card">
      <h2>Counter Component</h2>
      <p className="count-display">Current Count: {count}</p>
      <div className="button-group">
        <button onClick={increment} className="btn btn-primary">Increment</button>
        <button onClick={decrement} className="btn btn-danger">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
