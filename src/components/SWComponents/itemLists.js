import React from 'react';

import ItemList from '../ItemList'
import { withData,  withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, func) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        );
    };
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const renderName = (item) => <span>{item.name}</span>;
const renderNameAndBirthYear = (item) => <span>{item.name} ({item.birthYear})</span>;

const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderNameAndBirthYear)
    ), 
    mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    mapStarshipMethodsToProps
);

export {
    PersonList,
    PlanetList,
    StarshipList
};