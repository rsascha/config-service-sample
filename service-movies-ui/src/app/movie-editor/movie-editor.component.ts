import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/api-movies';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'app-movie-editor',
    templateUrl: './movie-editor.component.html',
    styleUrls: ['./movie-editor.component.sass']
})
export class MovieEditorComponent implements OnInit {

    movies$: Observable<Movie[]>;

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit(): void {
        this.movies$ = this.getMovies();
    }

    getMovies(): Observable<Movie[]> {
        return this.moviesService.api.appControllerGetMovies();
    }


}
