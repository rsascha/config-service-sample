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
        const applicationHost = environment.applicationHost;
        const applicationPort = environment.applicationPort;
        const defaultApi = new DefaultService(this.httpClient, `http://${applicationHost}:${applicationPort}`, null);
        return defaultApi.appControllerGetMovies();
    }


}
