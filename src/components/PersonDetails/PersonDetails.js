import React, { Component } from 'react';

import './PersonDetails.css';
import swapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export default class PersonDetails extends Component {
    constructor() {
        super();

        this.state = {
            person: null, 
            loading: true,
            error: false
        };

        this.swapiService = new swapiService();

        this.updatePerson = this.updatePerson.bind(this);
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId)
            this.updatePerson();
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId)
            return;

        this.swapiService.getPerson(personId)
            .then(person => this.setState({ person, loading: false, error: false }))
            .catch(err => this.setState({ error: true, loading: false }));
    }

    render() {
        if (!this.state.person)
            return <p>Select a person from a list</p>;

        const loading = this.state.loading ? <Spinner /> : null;
        const error = this.state.error ? <ErrorIndicator /> : null;

        const content = !(loading || error) ? <PersonView person={this.state.person} /> : null;

        return(
            <div className="person-details card d-flex flex-row">
                {loading}
                {error}
                {content}
            </div>
        );
    }
}

const PersonView = ({ person }) => {
    const {id, name, gender, birthYear, eyeColor} = person;

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