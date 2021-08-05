import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header">
            <a href="/">
                <h1>BBCM Programs</h1>
            </a>

            <span>
            <Link to="/form"><button>Add New Activity</button></Link>
            
            <Link to="/login"><button className="login-btn"></button></Link>
            </span>            
        </header>
    );
}

export default Header;