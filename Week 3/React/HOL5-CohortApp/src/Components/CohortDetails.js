import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const statusStyle = {
        color: props.status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={statusStyle}>{props.name}</h3>
            <dl>
                <dt>Duration</dt>
                <dd>{props.duration}</dd>
                <dt>Status</dt>
                <dd>{props.status}</dd>
                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
