import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.css';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
    const items = data.map(item => {
        return (
            <li 
                className="list-group-item" 
                key={item.id}
                onClick={() => onItemSelected(item.id)}
            >
                {renderLabel(item)}
            </li>
        );
    });
    
    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemSelected: PropTypes.func,
    children: PropTypes.func.isRequired
};

export default ItemList;