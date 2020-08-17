import React, { Component } from 'react';
import swapiService from '../../services/swapiService';

import './RandomPlanet.css';

class RandomPlanet extends Component {
    constructor() {
        super();

        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
        };

        this.swapiService = new swapiService();

        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*15) + 2;
        this.swapiService.getPlanet(id)
            .then(planet => this.setState({
                id,
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter,
            }));

    }

    render() {
        const {id, name, population, rotationPeriod, diameter} = this.state;

        return(
            <div className="random-planet jumbotron d-flex mt-2">
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
            </div>
        );
    }
};

export default RandomPlanet;