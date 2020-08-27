import React, { Component } from 'react';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { PlanetList, PlanetDetails } from '../SWComponents';

export default class PeoplePage extends Component {
    constructor() {
        super();

        this.state = {
            selectedItemId: null
        };

        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(id) {
        this.setState({
            selectedItemId: id
        });
    }

    render(){
        return(
            <ErrorBoundary>
                <Row 
                    left={<PlanetList onItemSelected={this.onItemSelected} />}
                    right={<PlanetDetails itemId={this.state.selectedItemId} />}
                />
            </ErrorBoundary>
        );
    }
}