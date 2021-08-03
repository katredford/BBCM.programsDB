import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section id="hero">
            <div className="hero-text">
                <h2>Betty Brinn Children's Museum</h2>
                <Link to="/activity"><h3>Program Activities</h3></Link>
            </div>
        </section>
    );
}

export default Hero;