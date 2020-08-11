import React from 'react';

import './RandomPlanet.css';

const RandomPlanet = () => {
    return(
        <div className="random-planet jumbotron d-flex mt-2">
            <img src="https://starwars-visualguide.com./assets/img/planets/2.jpg" alt="planet" />
            <div>
                <h3>Alderaan</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>2,000,000,000</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>24 days</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>12,500km</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RandomPlanet;