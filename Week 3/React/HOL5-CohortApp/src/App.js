import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
    return (
        <div>
            <h1>Cohort Details Dashboard</h1>
            <CohortDetails
                name="React Cohort"
                duration="3 Months"
                status="Ongoing"
                trainer="Alice Johnson"
            />
            <CohortDetails
                name="Java Cohort"
                duration="4 Months"
                status="Completed"
                trainer="Bob Smith"
            />
            <CohortDetails
                name="Python Cohort"
                duration="2 Months"
                status="Ongoing"
                trainer="Carol White"
            />
            <CohortDetails
                name="Angular Cohort"
                duration="3 Months"
                status="Upcoming"
                trainer="David Brown"
            />
        </div>
    );
}

export default App;
