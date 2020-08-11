import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

export default class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <RandomPlanet />
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