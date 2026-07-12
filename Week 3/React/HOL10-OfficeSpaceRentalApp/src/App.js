import React from 'react';
import './App.css';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  const officeSpaces = [
    { Name: 'TechPark Tower', Rent: 75000, Address: 'MG Road, Bangalore' },
    { Name: 'Business Bay', Rent: 55000, Address: 'Andheri East, Mumbai' },
    { Name: 'Cyber Hub Office', Rent: 90000, Address: 'Sector 24, Gurugram' },
    { Name: 'StartUp Plaza', Rent: 45000, Address: 'Koramangala, Bangalore' },
    { Name: 'Corporate Center', Rent: 62000, Address: 'Baner, Pune' },
    { Name: 'Innovation Hub', Rent: 58000, Address: 'Whitefield, Bangalore' }
  ];

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div className="App">
      {heading}
      <img
        src="https://via.placeholder.com/600x300?text=Office+Space"
        alt="Office Space"
      />
      <h2>Available Office Spaces</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rent</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {officeSpaces.map((office, index) => (
            <tr key={index}>
              <td>{office.Name}</td>
              <td style={getRentStyle(office.Rent)}>₹{office.Rent}</td>
              <td>{office.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
