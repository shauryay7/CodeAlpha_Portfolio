// src/ActivitiesAndHonorsSection.js
import React from 'react';
import './ActivitiesAndHonorsSection.css';

const ActivitiesAndHonorsSection = () => {
    return (
        <>
            <div className="title">
                <h1>ACTIVITIES AND HONORS</h1>
            </div>
            <div className="activities-honors-section">
                <div className="activity-honor-item">
                    <h3>Warmup Ventures</h3>
                    <h4>Web Developerr</h4>
                    <p>June 2024 - July 2024 (2 months)</p>
                    <p>Developed and maintained websites using modern web technologies.</p>
                </div>
                <div className="activity-honor-item">
                    <h3>Intel Corporation</h3>
                    <h4>Intel® Unnati Industrial Training</h4>
                    <p>May 2024 - July 2024 (3 months)</p>
                    <p>Received industrial training focused on Intel applications in various fields.</p>
                </div>
            </div>
        </>
    );
};

export default ActivitiesAndHonorsSection;