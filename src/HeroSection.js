// src/HeroSection.js

import React, { useEffect } from 'react';
import './HeroSection.css'; // Ensure your CSS file is imported

const HeroSection = () => {
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const element = document.getElementById("code-text");
        const originalText = "Hi, I'm Shaurya"; // Set the original text directly
        let interval;

        // Function to start the cracking effect
        const startCrackingEffect = () => {
            let index = 0; // Reset index for each new effect

            const codeCrackEffect = () => {
                const randomText = originalText
                    .split("")
                    .map((char, i) => {
                        if (i < index) {
                            return originalText[i];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                element.innerText = randomText;

                if (index >= originalText.length) {
                    clearInterval(interval);
                }

                index += 1 / 3; // Adjust the speed of the cracking effect
            };

            // Clear previous interval to prevent overlapping
            clearInterval(interval);
            interval = setInterval(codeCrackEffect, 50);
        };

        // Start the cracking effect initially
        startCrackingEffect();

        // Repeat the effect every 2 seconds
        const repeatInterval = setInterval(() => {
            startCrackingEffect(); // Start a new cracking effect
        }, 90000);

        // Cleanup intervals on unmount
        return () => {
            clearInterval(interval);
            clearInterval(repeatInterval);
        };
    }, []);

    return (
        <div className="hero-container">
            <div className="text-section">
                {/* Ensure the id is unique to this specific element */}
                <h1 id="code-text">Hi, I'm Shaurya</h1>
                <p>
                    I'm a passionate Full Stack web developer with experience
                    developing Full Stack web applications with Python, Django,
                    React.js, and Cloud Technologies. I am strongly interested
                    in learning new technologies and implementing them in my
                    projects.
                </p>
                <div className="social-links">
                    <a href="mailto:your-email@example.com" className="btn">Email</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                </div>
                <a href="/resume.pdf" className="resume-btn">See My Resume</a>
            </div>
            <img src="https://media.tenor.com/CeDk6XdCgOUAAAAi/develop-web.gif" alt="Coding" className="hero-image" />
        </div>
    );
};

export default HeroSection;