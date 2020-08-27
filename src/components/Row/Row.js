import React from 'react';
import PropTypes from 'prop-types';

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

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;