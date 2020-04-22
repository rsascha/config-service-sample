import { Injectable } from '@nestjs/common';
import { DefaultApi, User } from './api-users/api';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<User[]> {
      
    const defaultApi = new DefaultApi("http://localhost:3333");
    return defaultApi.appControllerGetUsers()
        .then(result => {
            return result.body;
        });
  }
}
