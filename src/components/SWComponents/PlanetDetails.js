import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import ErrorBoundary from '../ErrorBoundary';
import { withSwapiService } from '../hoc-helpers'

const PlanetDetails = (props) => {
    return (
        <ErrorBoundary>
            <ItemDetails {...props}>
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation Period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
        </ErrorBoundary>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImageUrl
    };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);