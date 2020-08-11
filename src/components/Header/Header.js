import React from 'react';

import './Header.css';

const Header = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand">
                <a href="#" className="navbar-brand">Star DB</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a href="/people" className="nav-link">People</a>
                    </li>
                    <li className="nav-item">
                        <a href="/planets" className="nav-link">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a href="/starships" className="nav-link">Starships</a>
                    </li>       
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Header;