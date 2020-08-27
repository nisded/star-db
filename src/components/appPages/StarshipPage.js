import React, { Component } from 'react';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { StarshipList, StarshipDetails } from '../SWComponents';

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
                    left={<StarshipList onItemSelected={this.onItemSelected} />}
                    right={<StarshipDetails itemId={this.state.selectedItemId} />}
                />
            </ErrorBoundary>
        );
    }
}