import faker from 'faker';

export class Company {
    companyName: string;
    catchPhrase: string;
    location : {
        lat: number;
        lng: number;
    };
    color: string = 'blue';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()), // Silly faker didn't make it a float, but a string.
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `<div>
        <h2>Company Name: ${this.companyName}</h2>
        <h3>Slogan: ${this.catchPhrase}<h3>
        </div>`;
    }
}