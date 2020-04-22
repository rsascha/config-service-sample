import { User } from './entities/user.entity';
import { Photo } from './entities/photo.entity';
export declare class AppService {
    getHello(): string;
    private getFirstName;
    private getLastName;
    private getAge;
    generateDummyData(): Promise<any>;
    getUsers(): Promise<User[]>;
    getPhotos(): Promise<Photo[]>;
}
