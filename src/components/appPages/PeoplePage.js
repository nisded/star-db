import React, { Component } from 'react';
import Row from '../Row';
import ErrorBoundary from '../ErrorBoundary';
import { PersonList, PersonDetails } from '../SWComponents';

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
                    left={<PersonList onItemSelected={this.onItemSelected} />}
                    right={<PersonDetails itemId={this.state.selectedItemId} />}
                />
            </ErrorBoundary>
        );
    }
}