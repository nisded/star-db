import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorBoundary from '../ErrorBoundary';
import Row from '../Row';
import SwapiService from '../../services/SwapiService';
import { PersonDetails, StarshipDetails } from '../SWComponents';
import { SwapiServiceProvider } from '../swapiServiceContext';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            showRandomPlanet: true
        };

        this.swapiService = new SwapiService();

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
        
        return(
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container">
                        <Header />

                        <Row left={<PersonDetails itemId={1} />} right={<StarshipDetails itemId={9} />} />

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
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}