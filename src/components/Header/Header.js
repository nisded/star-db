import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand">
                <Link to="/" className="navbar-brand">Star DB</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/people/" className="nav-link">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/planets/" className="nav-link">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/starships/" className="nav-link">Starships</Link>
                    </li>       
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Header;