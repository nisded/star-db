import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import ErrorBoundary from '../ErrorBoundary';
import { withSwapiService } from '../hoc-helpers'

const PersonDetails = (props) => {
    return (
        <ErrorBoundary>
            <ItemDetails {...props}>
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImageUrl
    };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);