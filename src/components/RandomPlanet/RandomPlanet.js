import React, { Component } from 'react';

import './RandomPlanet.css';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator';

class RandomPlanet extends Component {
    constructor() {
        super();

        this.state = {
            planet: {},
            loading: true, 
            error: false
        };

        this.swapiService = new swapiService();

        this.updatePlanet = this.updatePlanet.bind(this);
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*15) + 2;

        console.log('update ' + id);

        this.swapiService.getPlanet(id)
            .then(planet => this.setState({ planet, loading: false, error: false }))
            .catch(err => this.setState({ error: true, loading: false }));
    }

    render() {
        const {planet, loading, error} = this.state;

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;
        
        const hasData = !(loading || error);
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return(
            <div className="random-planet jumbotron d-flex mt-2">
                {spinner}
                {errorMessage}
                {content}
            </div>
        );
    }
};

const PlanetView = ({ planet }) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
            <div>
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default RandomPlanet;