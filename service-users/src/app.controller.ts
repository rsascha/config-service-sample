import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Photo } from './entities/photo.entity';
import { Movie } from './api-movies/api';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @ApiResponse({
        type: Object,
        status: 200
    })
    @Get("/generate-dummy-data")
    generateDummyData(): Promise<any> {
        return this.appService.generateDummyData();
    }

    @ApiResponse({
        isArray: true,
        type: User,
        status: 200
    })
    @Get("/users")
    getUsers(): Promise<User[]> {
        return this.appService.getUsers();
    }

    @ApiResponse({
        isArray: true,
        type: Photo,
        status: 200
    })
    @Get("/photos")
    getPhotos(): Promise<Photo[]> {
        return this.appService.getPhotos();
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
}
