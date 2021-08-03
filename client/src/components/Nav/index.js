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
        <div>
        <header className="flex-row px-1">
            <h1>
                <Link to="/">
                    <span role="img" aria-label="act-little">📝</span>
          Activites for Little Ones
        </Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
        </div>
    );
}

export default Nav;