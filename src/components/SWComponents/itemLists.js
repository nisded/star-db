import React from 'react';

import ItemList from '../ItemList'
import { withData,  withSwapiService, withChildFunction, compose } from '../hoc-helpers';



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

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderNameAndBirthYear)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};