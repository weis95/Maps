import faker from 'faker';
import { Mappable } from './CustomMap';

//Implenting will help me point to the error, by checking the values.
export class User implements Mappable {
    name: string;
    location : {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()), // Silly faker didn't make it a float, but a string.
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}