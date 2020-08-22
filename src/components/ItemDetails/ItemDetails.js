import React, { Component } from 'react';

import './ItemDetails.css';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import ErrorBoundary from '../ErrorBoundary';

export default class ItemDetails extends Component {
    constructor() {
        super();

        this.state = {
            item: null, 
            loading: true,
            error: false
        };

        this.swapiService = new swapiService();

        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId)
            this.updateItem();
    }

    updateItem() {
        const {itemId} = this.props;
        if (!itemId)
            return;

        this.swapiService.getPerson(itemId)
            .then(item => this.setState({ item, loading: false, error: false }))
            .catch(err => this.setState({ error: true, loading: false }));
    }

    render() {
        if (!this.state.item)
            return <p>Select a person from a list</p>;

        const loading = this.state.loading ? <Spinner /> : null;
        const error = this.state.error ? <ErrorIndicator /> : null;

        const content = !(loading || error) ? <ItemView item={this.state.item} /> : null;

        return(
            <div className="person-details card d-flex flex-row">
                {loading}
                {error}
                {content}
            </div>
        );
    }
}

const ItemView = ({ item }) => {
    const {id, name, gender, birthYear, eyeColor} = item;

    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person" />
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Name:</span>
                        <span>{name}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};