// src/App.js

import React from 'react';
import './App.css';
import HeroSection from './HeroSection'; // Your Hero Section component
import Header from './Header'; // Importing the Header component
import SkillsSection from './SkillsSection'; // Importing the SkillsSection component

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <SkillsSection /> {/* Adding the SkillsSection here */}
        </div>
    );
}

export default App;