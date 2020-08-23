import React from 'react';

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

export default ItemList;