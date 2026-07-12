import React from "react";
import Counter from "./Components/Counter";
import CurrencyConvertor from "./Components/CurrencyConvertor";

function sayMessage(message) {
  alert(message);
}

function handleSyntheticEvent(e) {
  alert("I was clicked");
  console.log(e);
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Event Examples App</h1>

      <Counter />

      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
        <h2>Say Welcome</h2>
        <button
          onClick={() => sayMessage("Welcome")}
          style={{ padding: "8px 16px" }}
        >
          Say Welcome
        </button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
        <h2>Synthetic Event Example</h2>
        <button
          onClick={(e) => handleSyntheticEvent(e)}
          style={{ padding: "8px 16px" }}
        >
          Click Me (Synthetic Event)
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
