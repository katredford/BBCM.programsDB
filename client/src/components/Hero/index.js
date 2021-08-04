import React from 'react';
// hook
import { useLocation } from 'react-router-dom';

function Hero() {
    const location = useLocation();

    return (
        <section id="hero" className={location.pathname === "/" ? "home": ""}>
            <div className="hero-text">
                <h2>Betty Brinn Children's Museum</h2>
                <h3>Program Activities</h3>
            </div>
        </section>
    );
}

export default Hero;