import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorBoundary from '../ErrorBoundary';
import Row from '../Row';
import ItemDetails from '../ItemDetails';
import swapiService from '../../services/swapiService';
import { Record } from '../ItemDetails';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            showRandomPlanet: true
        };

        this.swapiService = new swapiService();

        this.toggleRandomPlanet = this.toggleRandomPlanet.bind(this);
    }

    toggleRandomPlanet() {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    }

    render() {
        const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const toggleButtonText = this.state.showRandomPlanet ? 'Hide' : 'Show';

        const personDetails = (
            <ItemDetails 
                itemId={11} 
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImageUrl}
            >
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails 
                itemId={9} 
                getData={this.swapiService.getStarship}
                getImageUrl={this.swapiService.getStarshipImageUrl}
            >
                <Record field="model" label="Model" />
                <Record field="costInCredits" label="Cost" />
                <Record field="length" label="Length" />
            </ItemDetails>
        );
        
        return(
            <ErrorBoundary>
                <div className="container">
                    <Header />

                    <Row left={personDetails} right={starshipDetails} />

                    {randomPlanet}
                    <div className="d-flex flex-row-reverse mb-3">
                        <button 
                            className="toggle-button btn btn-warning" 
                            onClick={this.toggleRandomPlanet}               
                        >
                            {`${toggleButtonText} planet`}
                        </button>
                    </div>
                    <PeoplePage />
                </div>
            </ErrorBoundary>
        );
    }
}