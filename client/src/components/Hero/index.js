import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Hero() {
    const location = useLocation();

    return (
        <section id="hero" className={location.pathname === "/" ? "home": ""}>
            <div className="hero-text">
                <h2>Betty Brinn Children's Museum</h2>
                <Link to="/activities"><h3>Program Activities</h3></Link>
            </div>
        </section>
    );
}

export default Hero;