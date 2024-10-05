import React from 'react';
import './EducationSection.css'; // Import the CSS file for styling

const EducationSection = () => {
    const educationData = [
        {
            degree: 'B.Tech | Computer Science And Programming',
            institution: 'SRM UNIVERSITY, Chennai',
            duration: 'Expected in July 2027',
            description: '• Completed online course on Programming Using Python, C++ Programming and Data Structures.\n• Received industrial training focused on Intel technologies and applications in various fields.\n• B. Tech in Computer Science (Specialization in Artificial Intelligence and Machine Learning).',
        },
        {
            degree: 'High School Diploma',
            institution: 'Delhi Public School, Jaipur',
            duration: 'June 2023',
            description: '',
        },
    ];

    return (
        <section className="education-section">
            <h2>Education and Training</h2>
            <div className="education-cards">
                {educationData.map((edu, index) => (
                    <div className="card" key={index}>
                        <h3>{edu.degree}</h3>
                        <h4>{edu.institution}</h4>
                        <p className="duration">{edu.duration}</p>
                        <p className="description">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;