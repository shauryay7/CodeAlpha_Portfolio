// src/App.js

import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import Header from './Header';
import SkillsSection from './SkillsSection';
import Footer from './Footer';
import ActivitiesAndHonorsSection from './ActivitiesAndHonorsSection';
import EducationSection from './EducationSection';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <SkillsSection />
            <EducationSection />
            <ActivitiesAndHonorsSection />
            <Footer /> {/* Add Footer at the end */}
        </div>
    );
}

export default App;