import React, { Component } from 'react';

import './PeoplePage.css';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import swapiService from '../../services/swapiService';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { Record } from '../ItemDetails';

export default class PeoplePage extends Component {
    constructor() {
        super();

        this.state = {
            selectedPerson: null,
        };

        this.swapiService = new swapiService();
                
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople}
            >
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundary>
                <ItemDetails 
                    itemId={this.state.selectedPerson}
                    getData={this.swapiService.getPerson}
                    getImageUrl={this.swapiService.getPersonImageUrl}
                >
                    <Record field="gender" label="Gender" />
                    <Record field="birthYear" label="Birth Year" />
                    <Record field="eyeColor" label="Eye Color" />
                </ItemDetails>
            </ErrorBoundary>
        );
            
        return (
            <ErrorBoundary>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundary>
        );
    }
}