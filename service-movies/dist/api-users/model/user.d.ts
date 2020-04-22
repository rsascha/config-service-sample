import { Photo } from './photo';
export declare class User {
    'id': string;
    'firstName': string;
    'lastName': string;
    'age': number;
    'photos': Array<Photo>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
