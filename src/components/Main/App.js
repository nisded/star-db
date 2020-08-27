import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundary from '../ErrorBoundary';
import SwapiService from '../../services/SwapiService';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../appPages';
import { StarshipDetails } from '../SWComponents';

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
                    <Router>
                        <div className="container">
                            <Header />
                            {randomPlanet}
                            {planetToggleButton}
                            <Switch>
                                <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>} />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" exact component={PlanetsPage} />
                                <Route path="/starships/" exact component={StarshipsPage} />
                                <Route 
                                    path="/starships/:id" 
                                    render={({match, location, history}) => <StarshipDetails itemId={match.params.id} />} 
                                />
                                <Redirect to="/" />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}