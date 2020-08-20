import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            showRandomPlanet: true,
            hasError: false
        };

        this.toggleRandomPlanet = this.toggleRandomPlanet.bind(this);
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    toggleRandomPlanet() {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    }

    render() {
        if (this.state.hasError)
            return <ErrorIndicator />;

        const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const toggleButtonText = this.state.showRandomPlanet ? 'Hide' : 'Show';

        return(
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
        );
    }
}