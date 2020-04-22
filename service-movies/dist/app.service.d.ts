import { User } from './api-users/api';
export declare class AppService {
    getHello(): string;
    getUsers(): Promise<User[]>;
}
