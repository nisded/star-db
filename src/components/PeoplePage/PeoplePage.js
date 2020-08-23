import React, { Component } from 'react';

import './PeoplePage.css';
import { 
    PersonList,
    PersonDetails
 } from '../SWComponents';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';

export default class PeoplePage extends Component {
    constructor() {
        super();

        this.state = {
            selectedPerson: null,
        };

        this.swapiService = new SwapiService();
                
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const personList = <PersonList onItemSelected={this.onPersonSelected} />;
        const personDetails = <PersonDetails itemId={this.state.selectedPerson} />;
            
        return (
            <ErrorBoundary>
                <Row left={personList} right={personDetails} />
            </ErrorBoundary>
        );
    }
}