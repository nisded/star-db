import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { PeoplePage, PlanetPage, StarshipPage } from '../appPages';

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

        const planetToggleButton = (
            <div className="d-flex flex-row-reverse mb-3">
                <button 
                    className="toggle-button btn btn-warning" 
                    onClick={this.toggleRandomPlanet}               
                >
                    {`${toggleButtonText} planet`}
                </button>
            </div>
        );
        
        return(
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container">
                        <Header />
                        {randomPlanet}
                        {planetToggleButton}

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}