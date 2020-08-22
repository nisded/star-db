import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import ErrorBoundary from '../ErrorBoundary';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            showRandomPlanet: true
        };

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
                <div className="container">
                    <Header />
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