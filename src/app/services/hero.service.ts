import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { API_ROUTES } from '../constants/api-routes.constants';
import { HttpService } from './http.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

    constructor(private httpService: HttpService,) { }

    getHeroes(): Observable<Hero[]> {
        // return this.httpService.get(API_ROUTES.heores)
        //                 .toPromise()
        //                 .then(response => response.json() as Hero[] )
        //                 .catch(this.handleError);
        return this.httpService.get(API_ROUTES.heores)
                        .map<any, Hero[]>(response => response.json().data)
                        .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); //for demo purposes only
        return Observable.throw(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${API_ROUTES.heores}/${id}`;
        return this.httpService.get(url)
            .toPromise()
            .then(response => response.json() as Hero);
          //  .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
           // setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${API_ROUTES.heores}/${hero.id}`;
        return this.httpService
            .put(url, JSON.stringify(hero))
            .toPromise()
            .then(() => hero)
           // .catch(this.handleError);
    }

    create(hero: Hero): Promise<Hero> {
        return this.httpService.post(API_ROUTES.heores, 
                              JSON.stringify(hero))
                    .toPromise()
                    .then(res => res.json() as Hero)
            //        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${API_ROUTES.heores}/${id}`;
        return this.httpService.delete(url)
         .toPromise()
         .then(() => null)
        // .catch(this.handleError);
    }
}