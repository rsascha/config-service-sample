import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './api-users/api';
import { Movie } from './entities/movie.entity';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @ApiResponse({
        isArray: true,
        type: User,
        status: 200
    })
    @Get("/get-users")
    getUsers(): Promise<User[]> {
        return this.appService.getUsers();
    }

    @ApiResponse({
        isArray: true,
        type: Movie,
        status: 200
    })
    @Get("/get-movies")
    getMovies(): Promise<Movie[]> {
        return this.appService.getMovies();
    }

    @ApiResponse({
        type: Object,
        status: 200
    })
    @Get("/generate-dummy-data")
    generateDummyData(): Promise<any> {
        return this.appService.generateDummyData();
    }


}
