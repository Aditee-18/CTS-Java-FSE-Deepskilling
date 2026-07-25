import React, { useState } from 'react';

function UserPage() {
  const [passengerName, setPassengerName] = useState('');
  const [selectedFlight, setSelectedFlight] = useState('FL101');
  const [seats, setSeats] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (passengerName.trim() !== '') {
      setBookingConfirmed(true);
    }
  };

  return (
    <div className="user-page">
      <h2>Flight Ticket Booking Portal</h2>
      {bookingConfirmed ? (
        <div className="confirmation">
          <h3>Booking Confirmed!</h3>
          <p>Passenger Name: {passengerName}</p>
          <p>Flight Selected: {selectedFlight}</p>
          <p>Seats Booked: {seats}</p>
          <button onClick={() => setBookingConfirmed(false)} className="btn btn-secondary">
            Book Another Ticket
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} className="booking-form">
          <div className="form-field">
            <label>Passenger Name:</label>
            <input
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="form-field">
            <label>Select Flight:</label>
            <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)}>
              <option value="FL101">FL101 - New York to London ($450)</option>
              <option value="FL102">FL102 - Tokyo to San Francisco ($750)</option>
              <option value="FL103">FL103 - Paris to Dubai ($380)</option>
            </select>
          </div>
          <div className="form-field">
            <label>Number of Seats:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Confirm & Book Ticket</button>
        </form>
      )}
    </div>
  );
}

export default UserPage;
