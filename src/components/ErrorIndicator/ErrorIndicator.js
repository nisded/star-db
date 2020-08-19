import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <div className="boom">Boom!</div>
            <div>something has gone wrong</div>
            <div>(but we already sent droids to fix it)</div>
        </div>
    );
};

export default ErrorIndicator;