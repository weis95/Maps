import faker from 'faker';

export class User {
    name: string;
    location : {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()), // Silly faker didn't make it a float, but a string.
            lng: parseFloat(faker.address.longitude())
        }
    }
}