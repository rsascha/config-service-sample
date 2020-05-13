import { Component, OnInit } from '@angular/core';
import { Movie, DefaultService } from 'src/api-movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movie-editor',
    templateUrl: './movie-editor.component.html',
    styleUrls: ['./movie-editor.component.sass']
})
export class MovieEditorComponent implements OnInit {

    movies$: Observable<Movie[]>;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.movies$ = this.getMovies();
    }

    getMovies(): Observable<Movie[]> {
        const serviceMoviesHost = environment.serviceMoviesHost;
        const serviceMoviesPort = environment.serviceMoviesPort;
        const defaultApi = new DefaultService(this.httpClient, `http://${serviceMoviesHost}:${serviceMoviesPort}`, null);
        return defaultApi.appControllerGetMovies();
    }


}
