// src/HeroSection.js

import React, { useEffect } from 'react';
import './HeroSection.css'; // Ensure your CSS file is imported

const HeroSection = () => {
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const element = document.getElementById("name-text");
        const originalText = "Shaurya"; // Set the original text directly for the name
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
                <h1>
                    Hi, I'm <span id="name-text">Shaurya</span>
                </h1>
                <p>
                    Passionate developer skilled in React.js, Python, C, Java, and C++. Eager to take on challenges, learn, and grow. Ambitious student with strong communication and problem-solving skills.
                </p>
                <div className="social-links">
                    <a href="mailto:your-email@example.com" className="btn">Email</a>
                    <a href="https://www.linkedin.com/in/shaurya-yaduvanshi-43933b287/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                </div>
                <a href="https://drive.google.com/file/d/10n3TxAby5gitaeLy6XhYug7XllCtvBsm/view?usp=sharing" className="resume-btn">See My Resume</a>
            </div>
            <img src="https://media.tenor.com/CeDk6XdCgOUAAAAi/develop-web.gif" alt="Coding" className="hero-image" />
        </div>
    );
};

export default HeroSection;