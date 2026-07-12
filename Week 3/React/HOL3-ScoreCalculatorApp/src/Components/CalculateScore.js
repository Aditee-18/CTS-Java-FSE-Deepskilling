import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
    const average = props.total / 4;

    return (
        <div className="score-card">
            <h2>Student Score Details</h2>
            <p>Name: <span>{props.name}</span></p>
            <p>School: <span>{props.school}</span></p>
            <p>Total: <span>{props.total}</span></p>
            <p>Goal: <span>{props.goal}</span></p>
            <p>Average Score: <span>{average}</span></p>
        </div>
    );
}

export default CalculateScore;
