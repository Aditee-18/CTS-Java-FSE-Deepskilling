import React from "react";

function GuestPage() {
  const flights = [
    { id: 1, name: "Air India AI-101", from: "Delhi", to: "Mumbai", departure: "08:00 AM" },
    { id: 2, name: "IndiGo 6E-205", from: "Bangalore", to: "Chennai", departure: "10:30 AM" },
    { id: 3, name: "SpiceJet SG-401", from: "Hyderabad", to: "Kolkata", departure: "01:15 PM" },
    { id: 4, name: "Vistara UK-835", from: "Mumbai", to: "Delhi", departure: "04:45 PM" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, Guest!</h2>
      <p>Browse available flights below. Please login to book tickets.</p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Flight Name</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>From</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>To</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Departure</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{flight.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{flight.from}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{flight.to}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{flight.departure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestPage;
