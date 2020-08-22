import React, { Component } from 'react';

import './ItemList.css';
import Spinner from '../Spinner';

export default class ItemList extends Component {
    constructor() {
        super();
        
        this.state = {
            itemList: null
        };

        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.props.getData()
            .then(itemList => this.setState({ itemList }));
    }

    renderItems(itemList) {
        return itemList.map(item => {
            return (
                <li 
                    className="list-group-item" 
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}
                >
                    {this.props.children(item)}
                </li>
            );
        });
    }
    
    render() {
        const {itemList} = this.state;

        if (!itemList)
            return <Spinner />
            
        return(
            <ul className="item-list list-group">
                {this.renderItems(this.state.itemList)}
            </ul>
        );
    }
}