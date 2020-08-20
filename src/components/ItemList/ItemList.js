import React, { Component } from 'react';

import './ItemList.css';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';

export default class ItemList extends Component {
    constructor() {
        super();
        
        this.state = {
            personList: null
        };

        this.swapiService = new swapiService();

        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then(personList => this.setState({ personList }));
    }

    renderItems(itemList) {
        return itemList.map(item => {
            return (
                <li 
                    className="list-group-item" 
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}
                >
                    {item.name}
                </li>
            );
        });
    }
    
    render() {
        const {personList} = this.state;

        if (!personList)
            return <Spinner />
            
        return(
            <ul className="item-list list-group">
                {this.renderItems(this.state.personList)}
            </ul>
        );
    }
}