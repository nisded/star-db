export default class SwapiService {
    constructor() {
        this._apiBase = 'https://swapi.dev/api';

        this.getResourse = this.getResourse.bind(this);
        this.getAllPeople = this.getAllPeople.bind(this);
        this.getPerson = this.getPerson.bind(this);
        this.getAllPlanets = this.getAllPlanets.bind(this);
        this.getPlanet = this.getPlanet.bind(this);
        this.getAllStarships = this.getAllStarships.bind(this);
        this.getStarship = this.getStarship.bind(this);
        this._extractIdFromURL = this._extractIdFromURL.bind(this);
        this._transformPerson = this._transformPerson.bind(this);
        this._transformPlanet = this._transformPlanet.bind(this);
        this._transformStarship = this._transformStarship.bind(this);
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok)
            throw new Error(`Could not fetch ${url}, received ${res.status}`);

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse('/people');
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResourse('/planets');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResourse('/starships');
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._transformPlanet(starship);
    }

    _extractIdFromURL(item) {
        const idRegExp = /\/(\d+)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPerson(person) {
        return {
            id: this._extractIdFromURL(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    _transformPlanet(planet) {
        return {
            id: this._extractIdFromURL(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractIdFromURL(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }
}

// const sw = new SwapiService();
// sw.getAllPeople()
//     .then(planets => {
//         planets.forEach(p => console.log(p));
//     });
