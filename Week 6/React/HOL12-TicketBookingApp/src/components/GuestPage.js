import React from 'react';

function GuestPage() {
  const flights = [
    { id: 'FL101', origin: 'New York', destination: 'London', price: '$450', departure: '10:00 AM' },
    { id: 'FL102', origin: 'Tokyo', destination: 'San Francisco', price: '$750', departure: '02:30 PM' },
    { id: 'FL103', origin: 'Paris', destination: 'Dubai', price: '$380', departure: '08:15 PM' }
  ];

  return (
    <div className="guest-page">
      <h2>Flight Schedule (Guest View)</h2>
      <p className="notice">Please log in to book your flight tickets.</p>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departure}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestPage;
