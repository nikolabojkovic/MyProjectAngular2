import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';
import { HttpService } from '../services/http.service';
import { API_ROUTES } from '../constants/api-routes.constants';

@Injectable()
export class HeroSearchService {

    constructor(private httpService: HttpService) {}

    search(term: string): Observable<Hero[]> {
        return this.httpService.get(`${API_ROUTES.heores}?name=${term}`)
            .map(response => response.json() as Hero[]);
    }
}