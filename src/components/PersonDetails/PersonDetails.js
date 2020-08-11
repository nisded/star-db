import React from 'react';

import './PersonDetails.css';

const PersonDetails = () => {
    return(
        <div className="person-details card d-flex flex-row">
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="person" />
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year:</span>
                        <span>19BBY</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Hair color:</span>
                        <span>blond</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersonDetails;
