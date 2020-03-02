import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function NavBar() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/products">List Products</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
}

export default NavBar;
