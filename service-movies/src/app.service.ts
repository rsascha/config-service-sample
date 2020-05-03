import { Injectable } from '@nestjs/common';
import { DefaultApi, User } from './api-users/api';
import { Movie } from './entities/movie.entity';
import { getConnection } from 'typeorm';
import { LoremIpsum } from "lorem-ipsum";

@Injectable()
export class AppService {
    lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 2,
            min: 1
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });

    getHello(): string {
        return 'Hello World!';
    }

    private getTitle(): string {
        const names = ['Mad Max', 'Cliff Hanger', 'Rambo', 'Terminator']
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    private getTitleAddon(): string {
        const names = ['Remastered', '1', '2', '3', '4', '5', '6']
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }

    async generateDummyData(): Promise<any> {
        const connection = getConnection();
        const manager = connection.manager;
        const title = `${this.getTitle()} ${this.getTitleAddon()}`;
        const newMovie = new Movie(title, this.lorem.generateParagraphs(7));

        return manager.getRepository(Movie)
            .findOne({ where: { 'title': title } })
            .then(movie => {
                if (movie) {
                    // Update movie description
                    movie.description = newMovie.description;
                    return manager.save(movie)
                        .then(result => {
                            return result;
                        })
                        .catch(exception => {
                            return exception;
                        });
                } else {
                    // Add new movie
                    return manager.save(newMovie)
                        .then(result => {
                            return result;
                        })
                        .catch(exception => {
                            return exception;
                        });
                }
            })

    };

    async getUsers(): Promise<User[]> {
        const defaultApi = new DefaultApi("http://localhost:3333");
        return defaultApi.appControllerGetUsers()
            .then(result => {
                return result.body;
            });
    }

    async getMovies(): Promise<Movie[]> {
        const connection = getConnection();
        const movieRepository = connection.getRepository(Movie);
        const movies = movieRepository.find({});
        return movies;
    }
}
