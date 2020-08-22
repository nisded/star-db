import React from 'react';

import './Row.css';

const Row = ({ left, right }) => {
    return(
        <div className="row mb-4">
            <div className="col-12 col-md-6">
                {left}
            </div>
            <div className="col-12 col-md-6">
                {right}
            </div>
        </div>
    );
};

export default Row;