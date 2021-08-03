import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header">
            <a href="/">
                <h1>BBCM Programs</h1>
            </a>

            <button><Link to="/activity-form">
                Add New Activity
            </Link></button>
        </header>
    );


}

export default Header;