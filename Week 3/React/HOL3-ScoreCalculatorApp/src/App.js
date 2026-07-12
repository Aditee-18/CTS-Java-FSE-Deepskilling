import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
    return (
        <div>
            <h1>Score Calculator App</h1>
            <CalculateScore name="John Doe" school="ABC School" total={360} goal="90%" />
            <CalculateScore name="Jane Smith" school="XYZ School" total={320} goal="85%" />
        </div>
    );
}

export default App;
