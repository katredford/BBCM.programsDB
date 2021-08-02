import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/activity">
                            Your Activities
            </Link>
                    </li>
                    <li className="mx-1">
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
            </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/login">
                            Login
            </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <h3>
                <Link to="/activity">
                    <span role="img" aria-label="act-little new-activity-form">📝</span>
        Start Your New Activity
        </Link>
            </h3>
            <h1>
                <Link to="/home">
                    View All Activites for Little Ones
        </Link>
            </h1>
            <nav>
                {showNavigation()}
            </nav>

        </header>
    );
}

export default Nav;
