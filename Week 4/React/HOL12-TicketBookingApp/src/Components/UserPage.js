import React, { useState } from "react";

function UserPage() {
  const [passengerName, setPassengerName] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const flights = [
    "Air India AI-101 (Delhi - Mumbai)",
    "IndiGo 6E-205 (Bangalore - Chennai)",
    "SpiceJet SG-401 (Hyderabad - Kolkata)",
    "Vistara UK-835 (Mumbai - Delhi)",
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (passengerName && selectedFlight) {
      setBookingConfirmed(true);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, User! Book Your Ticket</h2>
      {bookingConfirmed ? (
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "15px",
          }}
        >
          <h3>Booking Confirmed!</h3>
          <p>Passenger: {passengerName}</p>
          <p>Flight: {selectedFlight}</p>
          <p>Number of Tickets: {numTickets}</p>
          <button
            onClick={() => {
              setBookingConfirmed(false);
              setPassengerName("");
              setSelectedFlight("");
              setNumTickets(1);
            }}
            style={{ padding: "8px 16px", marginTop: "10px" }}
          >
            Book Another Ticket
          </button>
        </div>
      ) : (
        <form onSubmit={handleBooking} style={{ marginTop: "15px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Passenger Name: </label>
            <input
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="Enter your name"
              style={{ padding: "6px", marginLeft: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Select Flight: </label>
            <select
              value={selectedFlight}
              onChange={(e) => setSelectedFlight(e.target.value)}
              style={{ padding: "6px", marginLeft: "10px" }}
            >
              <option value="">-- Select a Flight --</option>
              {flights.map((flight, index) => (
                <option key={index} value={flight}>
                  {flight}
                </option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Number of Tickets: </label>
            <input
              type="number"
              min="1"
              max="10"
              value={numTickets}
              onChange={(e) => setNumTickets(e.target.value)}
              style={{ padding: "6px", marginLeft: "10px", width: "60px" }}
            />
          </div>
          <button type="submit" style={{ padding: "8px 16px" }}>
            Book Ticket
          </button>
        </form>
      )}
    </div>
  );
}

export default UserPage;
