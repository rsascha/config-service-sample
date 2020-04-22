import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './api-users/api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/get-users")
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

}
