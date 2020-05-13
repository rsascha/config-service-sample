import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultService } from 'src/api-movies';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    public api: DefaultService;

    constructor(@Inject(HttpClient) private httpClient: HttpClient) {
        const applicationHost = environment.applicationHost;
        const applicationPort = environment.applicationPort;
        this.api = new DefaultService(this.httpClient, `http://${applicationHost}:${applicationPort}`, null);
    }
}
