import { AppService } from './app.service';
import { User } from './api-users/api';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getUsers(): Promise<User[]>;
}
