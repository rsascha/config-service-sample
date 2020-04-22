import { Photo } from "./photo.entity";
export declare class User {
    constructor(firstName: string, lastName: string, age: number);
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photos: Photo[];
}
