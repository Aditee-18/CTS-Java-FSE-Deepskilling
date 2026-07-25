import React from 'react';

function App() {
  const officeSpaces = [
    { Name: 'DBS', Rent: 5000, Address: 'Chennai' },
    { Name: 'FastTrack', Rent: 6500, Address: 'Bangalore' },
    { Name: 'Stellar', Rent: 5500, Address: 'Hyderabad' },
    { Name: 'Apex', Rent: 7000, Address: 'Pune' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Office Space Rental App</h1>
      {officeSpaces.map((office, index) => {
        const rentStyle = {
          color: office.Rent <= 6000 ? 'green' : 'red',
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', width: '300px' }}>
            <h2>Name: {office.Name}</h2>
            <h3 style={rentStyle}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
