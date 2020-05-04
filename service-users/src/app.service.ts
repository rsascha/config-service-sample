import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { User } from './entities/user.entity';
import { Photo } from './entities/photo.entity';
import { DefaultApi, Movie } from './api-movies/api';

@Injectable()
export class AppService {

    getHello(): string {
        return 'Hello World!';
    }

    private getFirstName(): string {
        const names = ['Otto', 'Max', 'Florian', 'Emilia', 'Sarah', 'Lina', 'Leonie', 'Elias', 'Emil', 'Theo']
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    private getLastName(): string {
        const names = ['Müller', 'Mustermann', 'Metzgermeister', 'Schmidt', 'Schneider', 'Fischer', 'Meyer']
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    private getAge(): number {
        return Math.floor(Math.random() * 100);
    }

    async generateDummyData(): Promise<any> {
        const connection = getConnection();
        const manager = connection.manager;

        const newUser = new User(this.getFirstName(), this.getLastName(), this.getAge());
        newUser.photos = [];
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            newUser.photos.push(new Photo(`Picture of ${this.getFirstName()}`));
        }

        return manager.save(newUser)
            .then(result => {
                return result;
            })
            .catch(exception => {
                return exception;
            });
    };

    async getUsers(): Promise<User[]> {
        const connection = getConnection();
        const photoRepository = connection.getRepository(User);
        const users = await photoRepository.find({ relations: ["photos"] });
        return users;
    };

    async getPhotos(): Promise<Photo[]> {

        const connection = getConnection();
        const photoRepository = connection.getRepository(Photo);
        const photos = await photoRepository.find({});
        return photos;
    };

    async getMovies(): Promise<Movie[]> {
        const serviceMoviesHost = process.env.serviceMoviesHost || "localhost";
        const serviceMoviesPort = process.env.serviceMoviesPort || "3334";
        const defaultApi = new DefaultApi(`http://${serviceMoviesHost}:${serviceMoviesPort}`);
        return defaultApi.appControllerGetMovies()
            .then(result => {
                return result.body;
            });
    }

}
