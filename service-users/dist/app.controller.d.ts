import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Photo } from './entities/photo.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    generateDummyData(): Promise<any>;
    getUsers(): Promise<User[]>;
    getPhotos(): Promise<Photo[]>;
}
