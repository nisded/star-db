import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

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
            <div className="container">
                <Header />
                {randomPlanet}
                <div className="d-flex flex-row-reverse">
                    <button 
                        className="toggle-button btn btn-warning mb-3" 
                        onClick={this.toggleRandomPlanet}               
                    >
                        {`${toggleButtonText} planet`}
                    </button>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-12 col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
}