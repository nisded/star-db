import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import ErrorBoundary from '../ErrorBoundary';
import { withSwapiService } from '../hoc-helpers'

const StarshipDetails = (props) => {
    return (
        <ErrorBoundary>
            <ItemDetails {...props}>
                <Record field="model" label="Model" />
                <Record field="costInCredits" label="Cost" />
                <Record field="length" label="Length" />
            </ItemDetails>
        </ErrorBoundary>
    );
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImageUrl
    };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);